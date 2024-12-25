import React, { FC } from "react";
import modalStyles from "./registrationForm.module.css";
import { Button } from "../../../ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { isEmail } from "validator";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm_password: string;
  checkbox: string;
};

export type RegistrationFormProps = {
  onSubmit: SubmitHandler<FormValues>;
};

export const RegistrationForm: FC<RegistrationFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <div className={modalStyles.container}>
      <h2 className={modalStyles.modalTitle}>Register</h2>
      <p className={modalStyles.modalSubtitle}>
        Please fill in the fields below:
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={modalStyles.modalInputGroup}>
          <input
            {...register("firstname", { required: "First Name is required" })}
            placeholder="First Name"
            type="text"
          />
          {errors.firstname && (
            <p className={modalStyles.error}>{errors.firstname.message}</p>
          )}

          <input
            {...register("lastname", { required: "Last Name is required" })}
            placeholder="Last Name"
            type="text"
          />
          {errors.lastname && (
            <p className={modalStyles.error}>{errors.lastname.message}</p>
          )}

          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) => isEmail(value) || "Invalid email address",
            })}
            placeholder="Email"
            type="email"
          />
          {errors.email && (
            <p className={modalStyles.error}>{errors.email.message}</p>
          )}

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 24,
                message: "Password must be at most 24 characters",
              },
            })}
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <p className={modalStyles.error}>{errors.password.message}</p>
          )}

          <input
            {...register("confirm_password", {
              required: "Confirm Password is required",
            })}
            placeholder="Confirm password"
            type="password"
          />
          {errors.confirm_password && (
            <p className={modalStyles.error}>
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        <Button type="submit" label="Register" className="pink"></Button>
        <div className={modalStyles.subscribe}>
          <input {...register("checkbox")} type="checkbox" />
          <p>Yes, I want subscribe to newsletter now</p>
          <p>{errors.checkbox?.message}</p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
