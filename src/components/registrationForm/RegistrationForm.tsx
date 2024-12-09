// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import modalStyles from "./registrationForm.module.css";
import { Button } from "../../ui/Button/Button";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";

type Props = {
  onClose: () => void;
};

const RegistrationForm: FC<Props> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className={modalStyles.modalOverlay}>
      <div className={modalStyles.modalContent}>
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

          <Button type="submit" className={modalStyles.modalLoginButton}>
            Register
          </Button>
          <div className={modalStyles.subscribe}>
            <input {...register("checkbox")} type="checkbox" />
            <p>Yes, I want subscribe to newsletter now</p>
            <p>{errors.checkbox?.message}</p>
          </div>

          <div className={modalStyles.modalDivider}>
            <span className={modalStyles.dividerLine}></span>
            <span className={modalStyles.dividerText}>OR</span>
            <span className={modalStyles.dividerLine}></span>
          </div>

          <Button className={modalStyles.modalGoogleButton} onClick={onClose}>
            Continue With Google
          </Button>

          <div className={modalStyles.modalFooter}>
            <p>
              Already have an account?{" "}
              <a href="/" className={modalStyles.modalLink}>
                Back to Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
