import * as yup from "yup";

export const schema = yup.object().shape({
  MyEmail: yup
    .string()
    .email("올바른 이메일 형태가 아닙니다.")
    .required("이메일은 필수 입력입니다."),

  MyName: yup
    .string()
    .max(10, "10자 이내로 입력해주세요.")
    .required("이름은 필수 입력입니다."),

  MyPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지 입니다.")
    .required("비밀번호는 필수 입력입니다."),
  MyPasswordCheck: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지 입니다.")
    .required("비밀번호는 필수 입력입니다."),
});
