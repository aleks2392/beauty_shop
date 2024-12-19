import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import React, { FC } from "react";

import styles from "./signInForm.module.css";
import { useForm, useController, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: SubmitHandler<FormValues>;
};

export const SignInForm: FC<Props> = ({ onSubmit }) => {
  const { control: formControl, handleSubmit } = useForm<FormValues>();

  const { field: emailField } = useController({
    control: formControl,
    name: "email",
    rules: { required: true },
  });

  const { field: passwordField } = useController({
    control: formControl,
    name: "password",
    rules: { required: true },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.modalTitle}>Log In</h2>
      <p className={styles.modalSubtitle}>
        Please enter your e-mail and password:
      </p>
      <div className={styles.modalInputGroup}>
        <Input placeholder={"Email"} type="text" {...emailField} />
        <Input placeholder="Password" type="password" {...passwordField} />
      </div>
      <Button label="Log In" className="pink large" type="submit" />
    </form>
  );
};
