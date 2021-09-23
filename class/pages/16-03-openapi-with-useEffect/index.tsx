import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogImage, setDogImage] = useState("");
  useEffect(() => {
    async function getImage() {
      const image = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(image.data.message);
    }
    getImage();
  }, []);

  return (
    <>
      <div>오픈 API</div>
      <img src={dogImage} />
    </>
  );
}
