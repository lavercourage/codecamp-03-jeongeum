import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function ModalAddressPrevPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);
    setIsOpen((prev) => !prev);
  };

  //   function onOpenZipCode() {
  //     setIsOpen((prev) => !prev);
  //   }

  //   function onCloseZipcode() {
  //     setIsOpen((prev) => !prev);
  //   }

  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button onClick={onToggleZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onToggleZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
