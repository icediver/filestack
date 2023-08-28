"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Dispatch, FC, FormEventHandler, SetStateAction } from "react";
import styles from "./AuthForm.module.scss";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth/auth.services";
import { IEmailPassword } from "@/store/user/user.interface";
import { AxiosError } from "axios";

interface IErrorMessage {
  error?: string;
  message?: string;
  statusCode?: number;
}
const AuthForm: FC<{ setIsOpen?: Dispatch<SetStateAction<boolean>> }> = ({
  setIsOpen,
}) => {
  const router = useRouter();
  // const { user, setUser } = useAuth();
  const {
    mutate: loginSync,
    isError,
    data,
  } = useMutation(
    ["login"],
    (data: IEmailPassword) => {
      console.log(data);
      return AuthService.main("login", data);
    },
    {
      onSuccess(data) {
        // if (setUser) setUser(data.user);
        console.log(data);
      },
      onError(err: AxiosError) {
        const error = (err.response?.data as IErrorMessage).message;
        console.log(error === undefined ? "" : error);
      },
    },
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (setIsOpen) setIsOpen(false);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.email} type="email" name="email" required />
      <input
        className={styles.password}
        type="password"
        name="password"
        required
      />
      <button className={styles.button} type="submit">
        Sign In
      </button>
    </form>
  );
};
export default AuthForm;
