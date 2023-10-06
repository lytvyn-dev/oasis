import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not get cabins");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Could not delete cabin!");
  }
}

export async function createEditCabin(newCabin, id = null) {
  //? 1) preparing image

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  let imagePath;

  if (typeof newCabin.image === "string") {
    imagePath = newCabin.image;
  } else {
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;
  }

  let query = supabase.from("cabins");

  if (!id) {
    //* 2) creating new Cabin add new image path to newly created cabin
    query = query.insert([{ ...newCabin, image: imagePath }]).select();
  }

  if (id) {
    // * Upload cabin
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  }

  const { data, error } = await query.select().single();
  if (error) throw new Error(error.message);

  if (!newCabin.image === "string") return data;

  //* 3) saving image to storage
  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(imageName, newCabin.image);

  // * if error while saving image delete newCabin
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
  }
}
