import { BgColorsOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(BgColorsOutlined)`
  font-size: 80px;
  color: #d6344a;
`;

export default function LibraryIconPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}
