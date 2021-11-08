import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

import MarketCreateBoardUI from "./marketWriteBoard.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./marketWriteBoard.queries";
import { schema } from "./marketWriteBoard.validations";

export default function MarketCreateBoard(props: any) {
  console.log("아아아: ", props);
  console.log("해시태그: ", props.data);
  const router = useRouter();
  // const [isActive, setIsActive] = useState(false);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const { handleSubmit, register, formState, setValue, trigger, watch } =
    useForm({
      mode: "onChange",
      // mode: "onChange" -> 내용이 바뀔 때마다 검증하기
      resolver: yupResolver(schema),
    });

  const onClickCancle = () => {
    router.push(`/market/list-board`);
    // 취소버튼 눌렀을 때, 걍 완전 메인페이지 이동
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            // ...data,
            name: data.MyProduct,
            remarks: data.MyOneWrite,
            contents: data.MyContents,
            price: Number(data.MyPrice),
            tags: data.MyTag.split(","),
            useditemAddress: {
              address: data.MyAddress,
              addressDetail: data.MyAddressDetail,
              lat: Number(data.MyLAT),
              lng: Number(data.MyLNG),
            },
            images: [...fileUrls],
          },
        },
      });
      // setIsActive(true);
      console.log(data);
      alert("success");
      router.push(`/market/${result.data.createUseditem._id}`);
      // router.push(`./login`);
    } catch (error) {
      console.log("등록오류: ", error);
    }
  };

  async function onClickEdit(data: any) {
    const myVariables = {
      useditemId: router.query.marketpage,
      updateUseditemInput: {
        name: data.MyProduct,
        remarks: data.MyOneWrite,
        contents: data.MyContents,
        price: Number(data.MyPrice),
        tags: data.MyTag.split(","),
        useditemAddress: {
          address: data.MyAddress,
          addressDetail: data.MyAddressDetail,
          lat: Number(data.MyLAT),
          lng: Number(data.MyLNG),
        },
      },
    };
    // if (data.MyProduct) {
    //   myVariables.updateUseditemInput.name = data.MyProduct;
    // }
    // if (data.MyOneWrite) {
    //   myVariables.updateUseditemInput.remarks = data.MyOneWrite;
    // }
    // if (data.MyContents) {
    //   myVariables.updateUseditemInput.contents = data.MyContents;
    // }
    // if (data.MyPrice) {
    //   myVariables.updateUseditemInput.price = Number(data.MyPrice);
    // }
    // if (data.MyTag) {
    //   myVariables.updateUseditemInput.tags = data.MyTag.split(",");
    // }

    // if (data.MyAddress) {
    //   myVariables.updateUseditemInput.useditemAddress.address = data.MyAddress;
    // }
    // if (data.MyAddressDetail) {
    //   myVariables.updateUseditemInput.useditemAddress.addressDetail =
    //     data.MyAddressDetail;
    // }
    // if (data.MyLAT) {
    //   myVariables.updateUseditemInput.useditemAddress.lat = Number(data.MyLAT);
    // }
    // if (data.MyLNG) {
    //   myVariables.updateUseditemInput.useditemAddress.lng = Number(data.MyLNG);
    // }

    try {
      const result = await updateUseditem({
        variables: myVariables,
      });
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      console.log("등록오류: ", error);
    }
  }
  // 이름들 바꾸기 -> MyProduct => name 등으로 바꿔주기
  // qt참고해서 바꿀거 바꾸고 / 이미지 수정 / 댓글 / 대댓글 / 오늘 본 상품 정리

  // async function onClickDelete(event){
  //     await deleteBoardano({
  //         variables: {number:Number(event.target.id)},
  //         refetchQueries : [{ query: FETCH_BOARDS }]
  //     })
  // }

  function onChangeMyContents(value: any) {
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("MyContents", value === "<p><br></p>" ? "" : value);
    // onChange 됐는지 react-hook-form에 알려주는 기능
    trigger("MyContents");
  }

  function onChangeMyLAT(value: any) {
    setValue("MyLAT", value || "");
    trigger("MyLAT");
  }

  function onChangeMyLNG(value: any) {
    setValue("MyLNG", value || "");
    trigger("MyLNG");
  }

  // 수정시 기존의 데이터를 저장 (수정시 아무것도 변경하지 않아도 있는 데이터가 리액트 폼에 저장됨)
  // 나중에 모든 요소 다 넣어두기
  useEffect(() => {
    if (props?.isEdit && props?.data?.fetchUseditem) {
      setValue("MyProduct", props?.data?.fetchUseditem?.name);
      setValue("MyOneWrite", props?.data?.fetchUseditem?.remarks);
      setValue("MyContents", props?.data?.fetchUseditem?.contents);
      setValue("MyPrice", props?.data?.fetchUseditem?.price);
      setValue("MyTag", props?.data?.fetchUseditem?.tags);
      setValue(
        "MyAddress",
        props?.data?.fetchUseditem?.useditemAddress.address
      );
      setValue(
        "MyAddressDetail",
        props?.data?.fetchUseditem?.useditemAddress.addressDetail
      );
      setValue("MyLAT", props?.data?.fetchUseditem?.useditemAddress.lat);
      setValue("MyLNG", props?.data?.fetchUseditem?.useditemAddress.lng);
    }
  }, [props?.isEdit, props?.data?.fetchUseditem]);

  function onChangeFileUrls(fileUrl: any, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  return (
    <MarketCreateBoardUI
      isEdit={props.isEdit}
      data={props.data}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onClickCancle={onClickCancle}
      register={register}
      formState={formState}
      setValue={setValue}
      onChangeMyContents={onChangeMyContents}
      contents={watch("MyContents")}
      onChangeMyLAT={onChangeMyLAT}
      lat={watch("MyLAT")}
      onChangeMyLNG={onChangeMyLNG}
      lng={watch("MyLNG")}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}

      // 모달
      // isActive={isActive}
      // isModalVisible={isModalVisible}
      // handleOk={handleOk}
      // handleCancel={handleCancel}
    />
  );
}
