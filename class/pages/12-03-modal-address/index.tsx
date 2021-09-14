import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function ModalAddressPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);
    setIsOpen(false);
  };

  function onOpenZipCode() {
    setIsOpen(true);
  }

  function onCloseZipcode() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={onOpenZipCode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onCloseZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
