import styled from "styled-components";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import SpinnerMini from "../../ui/SpinnerMini";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({ onClose, edit }) {
  const EDITING_SESSION = Boolean(edit);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: edit });

  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();

  const formIsWorking = isCreating || isEditing;

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (!EDITING_SESSION) {
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        }
      );
    } else {
      editCabin(
        { data: { ...data, image: image }, id: edit.id },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        }
      );
    }
  };

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormRow forId={"name"} label={"Cabin name"}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "Name field is required!" })}
        />
        {errors?.name?.message ? <Error>{errors.name.message}</Error> : ""}
      </FormRow>

      <FormRow forId={"maxCapacity"} label={"Maximum capacity"}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", { required: "This field is required!" })}
        />
        {errors?.maxCapacity?.message ? <Error>{errors.maxCapacity.message}</Error> : ""}
      </FormRow>

      <FormRow forId={"regularPrice"} label={"Regular price"}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: "Regular price field is required!" })}
        />
        {errors?.regularPrice?.message ? <Error>{errors.regularPrice.message}</Error> : ""}
      </FormRow>

      <FormRow forId={"discount"} label={"Discount"}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            validate: (value) =>
              value <= getValues().regularPrice || "Discount shold be less that Regular price",
          })}
        />
        {errors?.discount?.message ? <Error>{errors.discount.message}</Error> : ""}
      </FormRow>

      <FormRow forId={"description"} label={"Description for website"}>
        <Textarea
          id="description"
          {...register("description", { required: "Description field is required!" })}
        />
        {errors?.description?.message ? <Error>{errors.description.message}</Error> : ""}
      </FormRow>

      <FormRow forId={"image"} label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", edit ? {} : { required: "Image field is required!" })}
        />
        {errors?.image?.message ? <Error>{errors.image.message}</Error> : ""}
      </FormRow>

      <FormRow>
        <Button variation="secondary" disabled={formIsWorking} size="medium" type="reset">
          Cancel
        </Button>
        {formIsWorking && (
          <Button disabled={formIsWorking} variation="primary" size="medium">
            <SpinnerMini />
          </Button>
        )}
        {!formIsWorking && (
          <Button disabled={formIsWorking} variation="primary" size="medium">
            {edit ? "Edit Cabin" : "Create new Cabin"}
          </Button>
        )}
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
