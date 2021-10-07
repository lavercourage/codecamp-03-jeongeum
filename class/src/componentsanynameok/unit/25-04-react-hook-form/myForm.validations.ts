import * as yup from "yup";

export const schema = yup.object().shape({
  myName: yup.string().required("반드시 입력!"),

  myEmail: yup
    .string()
    .email("올바른 이메일 형태가 아닙니다.aaaa")
    .required("반드시 입력해야하는 필수 사항입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지 입니다.")
    .required("비밀번호는 반드시 입력해주세요."),
});
