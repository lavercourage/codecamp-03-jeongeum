import styled from "@emotion/styled";

export const List = styled.div`
  width: 1200px;
  margin-top: 40px;
  margin-bottom: 80px;
`;

export const Row = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  :hover {
    color: #8b0000;
  }
  cursor: pointer;
`;

export const ColumnNumber = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
`;

export const ColumnWriter = styled.div`
  width: 15%;
  text-align: center;
`;

export const ColumnUpDate = styled.div`
  width: 15%;
  text-align: center;
`;

export const Row2 = styled.div`
  height: 52px;
  display: flex;
  border-top: solid 1px #000000;
  border-bottom: solid 1px #bdbdbd;
  align-items: center;
`;

export const Number = styled.div`
  width: 10%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  /* :hover {
    color: #8B0000;
  } */
`;

export const Title = styled.div`
  width: 60%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  /* :hover {
    color: #8B0000;
  } */
`;

export const Writer = styled.div`
  width: 15%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const UpDate = styled.div`
  width: 15%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ListBottom = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
`;

export const PageButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

interface IPageProps {
  isActive: boolean;
}

export const Page = styled.span<IPageProps>`
  margin: 0 16px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "orange" : "black")};
  font-weight: ${(props) => (props.isActive ? "bold" : "black")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};

  :hover {
    color: "orange";
  }
`;

export const Button = styled.div`
  width: 171px;
  height: 52px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* text-align: center;
  display: table-cell;
  vertical-align: middle; */
  border: solid 1px #f2f2f2;
  border-radius: 10px;
  cursor: pointer;
`;

export const ButtonImg = styled.img`
  width: 18px;
  margin-right: 8px;
`;

export const TextToken = styled.span`
  color: ${(props: any) => (props.isMatched ? "red" : "black")};
`;
