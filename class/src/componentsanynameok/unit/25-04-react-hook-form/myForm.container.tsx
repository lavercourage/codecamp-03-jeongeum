import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./myForm.validations";
import MyFormUI from "./myForm.presenter";

export default function MyForm() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data) {
    console.log(data);
  }

  return (
    <MyFormUI
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
      register={register}
      formState={formState}
    />
  );
}
