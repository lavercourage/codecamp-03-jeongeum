import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";

import MarketCreateBoardUI from "./MarketWriteBoard.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWriteBoard.queries";
import { schema } from "./MarketWriteBoard.validations";

export default function MarketCreateBoard(props: any) {
  const router = useRouter();
  // const [isActive, setIsActive] = useState(false);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    // mode: "onChange" -> 내용이 바뀔 때마다 검증하기
    resolver: yupResolver(schema),
  });

  const onClickCancle = () => {
    router.push("/");
    // 취소버튼 눌렀을 때, 걍 완전 메인페이지 이동
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditem: {
            name: data.MyProduct,
            remarks: data.MyOneWrite,
            contents: data.MyContents,
            price: data.MyPrice,
            tags: data.MyTag,
            // useditemAddress: {
            //   zipcode: aaa,
            //   address: aaa,
            //   addressDetail: aaa,
            //   lat: aaaa,
            //   lng: aaa,
            // },
            // images: data.images,
          },
        },
      });
      // setIsActive(true);
      console.log(data);
      alert("success");
      // router.push(`/market/${result.data.createUseditem._id}`);
      // router.push("./login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MarketCreateBoardUI
      isEdit={props.isEdit}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickCancle={onClickCancle}
      register={register}
      formState={formState}
      // 모달
      // isActive={isActive}
      // isModalVisible={isModalVisible}
      // handleOk={handleOk}
      // handleCancel={handleCancel}
    />
  );
}
