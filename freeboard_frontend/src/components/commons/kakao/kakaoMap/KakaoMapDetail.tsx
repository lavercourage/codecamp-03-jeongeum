import { useEffect } from "react";

declare const window: typeof globalThis & { kakao: any };
// window 를 globalThis라고 표현하기도 함

export default function KakaoMapDetail(props: any) {
  useEffect(() => {
    console.log("아아아: ", props);
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

        console.log(options);
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        console.log("지도 :", map);
        // 기존에 있던 맵을 그리는 부분

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          props.data?.fetchUseditem.useditemAddress?.lat || 37.497973081282595,
          props.data?.fetchUseditem.useditemAddress?.lng || 127.02763975481963
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, [props.data]);

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
