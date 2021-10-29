import * as yup from "yup";

export const schema = yup.object().shape({
  MyProduct: yup.string().required("상품명은 필수 입력입니다."),

  MyOneWrite: yup.string(),

  MyContents: yup.string().required("상품설명은 필수 입력입니다."),

  MyPrice: yup
    .number()
    .required("금액은 필수 입력입니다.")
    .typeError("숫자만 입력해 주세요."),

  MyTag: yup.string(),

  MyLat: yup.number(),

  Mylng: yup.number(),
});
