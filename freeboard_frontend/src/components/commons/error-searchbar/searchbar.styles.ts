import { FireFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SearchBar = styled.div`
  width: 776px;
  height: 52px;
  border-radius: 16px;
  background-color: #f2f2f2;
  margin-top: 80px;
  margin-right: 424px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const SearchBarIcon = styled(FireFilled)`
  color: teal;
  font-size: 30px;
  cursor: pointer;
  :hover {
    color: orchid;
  }
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  /* outline: none; */
  background: none;
  margin: 0 20px;
`;
