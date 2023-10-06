import styled from "styled-components";
import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useGetSettings } from "./useGetSettings";
import { useUpdateSetting } from "./useUpdateSetting";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function UpdateSettingsForm() {
  const { data: { minNights, maxNights, maxGuests, breakfastPrice } = {}, isLoading } =
    useGetSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const formIsWorking = isLoading || isUpdating;

  const onBlurHandler = (e) => {
    const { value } = e.target;

    handleSubmit(() => {
      updateSetting({ [e.target.id]: value });
    })();
  };

  return (
    <Form>
      <FormRow forId="minNights" type="row" label="Minimum nights/booking">
        <Input
          defaultValue={minNights}
          disabled={formIsWorking}
          type="number"
          id="minNights"
          {...register("minNights", {
            min: {
              value: 1,
              message: "Rent nights could not be less than 1",
            },
            max: {
              value: 90,
              message: "Rent nights can not be greater than 90 nights",
            },
            onBlur: onBlurHandler,
          })}
        />
        {errors.minNights && <Error>{errors.minNights.message}</Error>}
      </FormRow>
      <FormRow forId="maxNights" type="row" label="Maximum nights/booking">
        <Input
          defaultValue={maxNights}
          disabled={formIsWorking}
          type="number"
          id="maxNights"
          {...register("maxNights", {
            max: {
              value: 90,
              message: "Rent nights can not be greater than 90 nights",
            },
            min: {
              value: 1,
              message: "Rent nights could not be less than 1",
            },
            onBlur: onBlurHandler,
          })}
        />
        {errors.maxNights && <Error>{errors.maxNights.message}</Error>}
      </FormRow>
      <FormRow forId="maxGuests" type="row" label="Maximum guests/booking">
        <Input
          defaultValue={maxGuests}
          disabled={formIsWorking}
          type="number"
          id="maxGuests"
          {...register("maxGuests", {
            max: {
              value: 100,
              message: "Max guest in hotel is 100 people",
            },
            min: {
              value: 1,
              message: "Min guest in hotel is 1",
            },
            onBlur: onBlurHandler,
          })}
        />
        {errors.maxGuests && <Error>{errors.maxGuests.message}</Error>}
      </FormRow>
      <FormRow forId="breakfastPrice" type="row" label="Breakfast price">
        <Input
          defaultValue={breakfastPrice}
          disabled={formIsWorking}
          type="number"
          id="breakfastPrice"
          {...register("breakfastPrice", {
            max: {
              value: 100,
              message: "Max breakfast price 100$",
            },
            min: {
              value: 15,
              message: "Min breakfast price is 15$",
            },
            onBlur: onBlurHandler,
          })}
        />
        {errors.breakfastPrice && <Error>{errors.breakfastPrice.message}</Error>}
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
