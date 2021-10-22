import { useEffect } from "react";

declare const window: typeof globalThis & { kakao: any };
// window 를 globalThis라고 표현하기도 함

export default function KakaoMapDetail(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a0c35afa408f9ae186dace66aa85d84c";
    document.head.appendChild(script);
    // 스크립트 만들고 document 헤드에 추가하는 부분

    script.onload = () => {
      // 스크립트가 로드될때까지 기다리는 부분
      window.kakao.maps.load(function () {
        // 카카오 맵이 로드 될때까지 기다리는 부분
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem.useditemAddress?.lat ||
              37.497973081282595,
            props.data?.fetchUseditem.useditemAddress?.lng || 127.02763975481963
          ), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        console.log(map);
        // 기존에 있던 맵을 그리는 부분
      });
    };

    // 지도 이동막기
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        // draggable: false, // 지도를 생성할때 지도 이동 및 확대/축소를 막으려면 draggable: false 옵션을 추가하세요
        level: 3, // 지도의 확대 레벨
      };

    const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 버튼 클릭에 따라 지도 이동 기능을 막거나 풀고 싶은 경우에는 map.setDraggable 함수를 사용합니다
    function setDraggable(draggable: any) {
      // 마우스 드래그로 지도 이동 가능여부를 설정합니다
      map.setDraggable(draggable);
    }
    // 지도 이동 막기

    // 이미지 지도에 마커 표시하기
    // 이미지 지도에서 마커가 표시될 위치입니다
    const markerPosition =
      new window.kakao.maps.LatLng(`${props.data?.fetchUseditem.useditemAddress?.lat},
    ${props.data?.fetchUseditem.useditemAddress?.lng}`);

    // 이미지 지도에 표시할 마커입니다
    // 이미지 지도에 표시할 마커는 Object 형태입니다
    const marker = {
      position: markerPosition,
    };

    const staticMapContainer = document.getElementById("staticMap"), // 이미지 지도를 표시할 div
      staticMapOption = {
        center: new window.kakao.maps.LatLng(
          props.data?.fetchUseditem.useditemAddress?.lat || 37.485053527846674,
          props.data?.fetchUseditem.useditemAddress?.lng || 126.89533419993485
        ), // 이미지 지도의 중심좌표
        level: 3, // 이미지 지도의 확대 레벨
        marker: marker, // 이미지 지도에 표시할 마커
      };

    // 이미지 지도를 생성합니다
    const staticMap = new window.kakao.maps.StaticMap(
      staticMapContainer,
      staticMapOption
    );
    // 이미지 지도에 마커 표시하기
  }, []);

  return (
    <>
      <div
        id="map"
        style={{
          width: "792px",
          height: "360px",
          marginTop: "60px",
          marginBottom: "60px",
        }}
      ></div>
    </>
  );
}
