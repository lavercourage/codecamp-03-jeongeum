import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./SignInBoard.validations";
import SignInBoardUI from "./SignInBoard.presenter";

export default function SignInBoard() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickSignIn(data: any) {
    console.log(data);
  }

  return (
    <SignInBoardUI
      handleSubmit={handleSubmit}
      onClickSignIn={onClickSignIn}
      register={register}
      formState={formState}
    />
  );
}
