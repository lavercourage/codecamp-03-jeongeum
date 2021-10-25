import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import WriteMapInputBar from "../../inputs/writeMapInput";

const Map = styled.div`
  width: 996px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;
const LocationLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubTitle = styled.div`
  font-size: 16px;
  color: #000000;
`;
const LocationRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LoTop = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-top: 16px;
`;
const LoImg = styled.img`
  /* width: 14px; */
  /* height: 20px; */
  height: 30px;
  padding: 0 20px;
`;
const LoBottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoInput2 = styled.input`
  width: 588px;
  height: 52px;
  color: #000000;
  font-size: 16px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  :focus {
    outline: none;
  }
  /* ::-webkit-input-placeholder {
    color: #4f4f4f;
    text-align: center;
  } */
`;
const InputBar = styled.input`
  width: 108px;
  height: 52px;
  color: #000000;
  font-size: 16px;
  text-align: center;
  /* padding-left: 16px; */
  border: 1px solid #bdbdbd;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #4f4f4f;
    text-align: center;
  }
`;

declare const window: typeof globalThis & { kakao: any };
// window 를 globalThis라고 표현하기도 함

export default function KakaoMapInput(props: any) {
  console.log("카카오지도1: ", props);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a0c35afa408f9ae186dace66aa85d84c";
    document.head.appendChild(script);
    // 스크립트 만들고 document 헤드에 추가하는 부분

    script.onload = () => {
      console.log("카카오지도2: ", props);
      // 스크립트가 로드될때까지 기다리는 부분
      window.kakao.maps.load(function () {
        // 카카오 맵이 로드 될때까지 기다리는 부분
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem.useditemAddress.lat || 37.497973081282595,
            props.data?.fetchUseditem.useditemAddress.lng || 127.02763975481963
          ),
          level: 3,
        };
        console.log(options);
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        console.log(map);
        // 기존에 있던 맵을 그리는 부분

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            console.log(latlng);
            props.onChangeMyLAT(latlng.Ma);
            props.onChangeMyLNG(latlng.La);
          }
        );
      });
    };
  }, [props.data]);

  return (
    <>
      <Map>
        <LocationLeft>
          <SubTitle>거래위치</SubTitle>
          <div
            id="map"
            style={{ width: "384px", height: "252px", marginTop: "16px" }}
          ></div>
        </LocationLeft>
        <LocationRight>
          <LoTop>
            <SubTitle>GPS</SubTitle>
            <LoBox>
              <WriteMapInputBar
                type="text"
                // setValue
                // register={props.register("MyLAT")}
                placeholder="위도(LAT)"
                value={props?.lat || ""}
                readOnly
                // defaultValue={props.data?.fetchUseditem.useditemAddress.lat}
              />
              <LoImg src="/image/marketboard/write/ic_location_on-32px.svg" />
              <WriteMapInputBar
                type="text"
                // register={props.register("MyLNG")}
                placeholder="경도(LNG)"
                readOnly
                value={props?.lng || ""}
                // defaultValue={props.data?.fetchUseditem.useditemAddress.lat}
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
    </>
  );
}
