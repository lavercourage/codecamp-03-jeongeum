import WriteInputBar from "../../../commons/inputs/writeInput";
import WriteDetailInputBar from "../../../commons/inputs/writeDetailInput";
import WriteMapInputBar from "../../../commons/inputs/writeMapInput";
import RegisterButton from "../../../commons/buttons/registerbutton";
import ToListButton from "../../../commons/buttons/tolistbutton";
import {
  Wrapper,
  InnerWrapper,
  Title,
  Map,
  LocationLeft,
  SubTitle,
  LocationMap,
  LocationRight,
  LoTop,
  LoBox,
  LoInput,
  LoImg,
  LoBottom,
  LoInput2,
  AddPhoto,
  Photos,
  Images,
  MainSetting,
  Select,
  RadioBt,
  RadioName,
  Button1,
  CancleButton,
  ContentsForm,
  ContentsTitle,
  ReactQuillBox,
} from "./MarketWriteBoard.styles";
import { Modal, Button } from "antd";

export default function MarketCreateBoardUI(props: any) {
  // const formats = [
  //   "header",
  //   "font",
  //   "size",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  //   "color",
  // ];
  return (
    <>
      <Wrapper
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickSubmit
        )}
      >
        {/* <Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}> */}
        <InnerWrapper>
          <Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</Title>
          <WriteInputBar
            title="상품명"
            type="text"
            register={props.register("MyProduct")}
            placeholder="상품명을 작성해주세요."
            defaultValue={props.data?.fetchUseditem.name}
            error={props.formState.errors.MyProduct?.message}
          />
          <WriteInputBar
            title="한줄요약"
            type="text"
            register={props.register("MyOneWrite")}
            placeholder="한줄요약을 작성해주세요."
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <ContentsForm>
            <ContentsTitle>상품설명</ContentsTitle>
            <ReactQuillBox
              // value={this.state.text}
              theme="Bubble"
              onChange={props.onChangeMyContents}
              defaultValue={props.data?.fetchUseditem.contents}
              placeholder={"상품을 설명해주세요."}
              // modules={formats}
            />
          </ContentsForm>

          {/* <WriteDetailInputBar
            title="상품설명"
            register={props.register("MyContents")}
            placeholder="상품을 설명해주세요."
            defaultValue={props.data?.fetchUseditem.contents}
          /> */}
          <WriteInputBar
            title="판매 가격"
            type="text"
            register={props.register("MyPrice")}
            placeholder="판매 가격을 입력해주세요."
            defaultValue={props.data?.fetchUseditem.price}
            error={props.formState.errors.MyPrice?.message}
          />
          <WriteInputBar
            title="태그입력"
            type="text"
            register={props.register("MyTag")}
            placeholder="#태그 #태그 #태그"
            defaultValue={props.data?.fetchUseditem.tags}
            error={props.formState.errors.MyTag?.message}
          />
          <Map>
            <LocationLeft>
              <SubTitle>거래위치</SubTitle>
              <LocationMap></LocationMap>
            </LocationLeft>
            <LocationRight>
              <LoTop>
                <SubTitle>GPS</SubTitle>
                <LoBox>
                  {/* <LoInput placeholder="위도(LAT)"></LoInput> */}
                  <WriteMapInputBar
                    type="text"
                    register={props.register("MyLat")}
                    placeholder="위도(LAT)"
                    // defaultValue={props.data?.fetchUseditem.useditemAddress.lat}
                  />
                  <LoImg src="/image/marketboard/write/ic_location_on-32px.svg" />
                  {/* <LoInput placeholder="경도(LNG)"></LoInput>{" "} */}
                  <WriteMapInputBar
                    type="text"
                    register={props.register("MyLng")}
                    placeholder="경도(LNG)"
                    // defaultValue={props.data?.fetchUseditem.useditemAddress.lng}
                  />
                </LoBox>
              </LoTop>
              <LoBottom>
                <SubTitle>주소</SubTitle>
                <LoInput2></LoInput2>
                <LoInput2></LoInput2>
              </LoBottom>
            </LocationRight>
          </Map>
          <AddPhoto>
            <SubTitle>사진첨부</SubTitle>
            <Photos>
              <Images />
              <Images />
            </Photos>
          </AddPhoto>
          <MainSetting>
            <SubTitle>메인 사진 설정</SubTitle>
            <Select>
              <RadioBt type="radio" id="img1" name="radiobt" />
              <RadioName htmlFor="img1">사진 1</RadioName>
              <RadioBt type="radio" id="img2" name="radiobt" />
              <RadioName htmlFor="img2">사진 2</RadioName>
            </Select>
          </MainSetting>
          <Button1>
            {props.isEdit && (
              <ToListButton
                name="목록으로"
                type="button"
                onClick={props.onClickCancle}
              />
            )}
            <RegisterButton
              name={props.isEdit ? "수정하기" : "등록하기"}
              type="submit"
              isValid={props.formState.isValid}
            />
          </Button1>
          {/* {props.isActive && (
            <>
              <Modal
                title="Basic Modal"
                visible={props.isModalVisible}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                회원가입을 축하합니다!
                <br />
                로그인 후 이용해주세요!
              </Modal>
              <Button type="primary" onClick={props.showModal}>
                Open Modal
              </Button>
            </>
          )} */}
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
