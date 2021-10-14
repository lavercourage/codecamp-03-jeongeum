import { useEffect } from "react";

declare const window: typeof globalThis & { kakao: any };

export default function KakaoMapPage() {
  useEffect(() => {
    console.log("asdfasfasfs");
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a0c35afa408f9ae186dace66aa85d84c";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.502407397963935,
            126.89531980494539
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            const latlng = mouseEvent.latLng;

            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: "800px", height: "600px" }}></div>
    </>
  );
}
