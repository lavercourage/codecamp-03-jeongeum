// import { MyButton} from "./myForm.styles";
import { ErrorMessage } from "./myForm.styles";
import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/01/Input01";

export default function MyFormUI(props) {
  return (
    <div onSubmit={props.handleSubmit(props.onClickLogin)}>
      <div>리액트 훅 폼</div>
      이름:
      <Input01
        name="아이디"
        type="text"
        register={props.register("myName")}
        placeholder="ㅁㅁ"
      />
      <ErrorMessage>{props.formState.errors.myName?.message}</ErrorMessage>
      이메일: <Input01 type="text" register={props.register("myEmail")} />
      <ErrorMessage>{props.formState.errors.myEmail?.message}</ErrorMessage>
      비밀번호:
      <Input01 type="password" register={props.register("myPassword")} />
      <ErrorMessage>{props.formState.errors.myPassword?.message}</ErrorMessage>
      <Button01 type="submit" isValid={props.formState.isValid} name="dddd" />
      {/* {isEdit && <Button01
        name="로로긴긴하하기기"
        type="submit"
        isValid={props.formState.isValid}
      >} */}
    </div>
  );
}
