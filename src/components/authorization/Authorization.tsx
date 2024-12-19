import React, { useState } from "react";
import modalStyles from "./Modal.module.css";
import { RegistrationForm, RegistrationFormProps } from "./registrationForm";
import { SignInForm, SignInFormProps } from "./signInForm";
import { Button } from "../../ui/Button";
import { Divider } from "../../ui/Divider";

export const Authorization = () => {
  const [authState, setAuthState] = useState<"signIn" | "signUp" | "recovery">(
    "signIn",
  );

  const showGoogleButton = authState === "signIn" || authState === "signUp";

  const handleSignInSubmit: SignInFormProps["onSubmit"] = () => {};

  const handleSignUpSubmit: RegistrationFormProps["onSubmit"] = () => {};

  const handleCreateAccountClick = () => {
    setAuthState("signUp");
  };

  const handleLogInClick = () => {
    setAuthState("signIn");
  };

  const handleRecoveryClick = () => {
    setAuthState("recovery");
  };

  return (
    <>
      {authState === "signIn" && <SignInForm onSubmit={handleSignInSubmit} />}
      {authState === "signUp" && (
        <RegistrationForm onSubmit={handleSignUpSubmit} />
      )}
      <div className={modalStyles.modalFooter}>
        {showGoogleButton && (
          <>
            <Divider text={"OR"} />

            <Button
              type="submit"
              label="Continue With Google"
              variant="pink"
              className={modalStyles.modalGoogleButton}
            ></Button>
          </>
        )}
        {authState === "signIn" && (
          <p>
            Forgot your password?{" "}
            <a className={modalStyles.modalLink} onClick={handleRecoveryClick}>
              Recover password
            </a>
          </p>
        )}
        {authState === "signIn" && (
          <p>
            New to Bloom Beauty?{" "}
            <a
              className={modalStyles.modalLink}
              onClick={handleCreateAccountClick}
            >
              Create an Account
            </a>
          </p>
        )}
        {(authState === "signUp" || authState === "recovery") && (
          <p>
            Already have an account?{" "}
            <a className={modalStyles.modalLink} onClick={handleLogInClick}>
              Back to Log In
            </a>
          </p>
        )}
      </div>
    </>
  );
};
