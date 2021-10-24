import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 160px;
`;
const BestItemWrapper = styled.div`
  width: 282px;
  height: 391px;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ThumbImg = styled.img`
  width: 242px;
  height: 242px;
`;
const ThumbImgNone = styled.div`
  width: 242px;
  height: 242px;
  background-color: gray;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  padding-top: 96px;
`;
const BestWrapper = styled.div`
  width: 242px;
  height: 89px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const BestLeft = styled.div`
  width: 220px;
`;
const BestName = styled.div`
  width: 220px;
  height: 27px;
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const BestRemarks = styled.div`
  width: 220px;
  height: 18px;
  margin-top: 4px;
  color: #4f4f4f;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const BestPrice = styled.div`
  width: 220px;
  height: 28px;
  margin-top: 12px;
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const BestRight = styled.div`
  width: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const PickItemIcon = styled(HeartFilled)`
  color: #ffd600;
  font-size: 20px;
`;
const PickItemCount = styled.div`
  width: 22px;
  height: 24px;
  margin-top: 5px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      images
      pickedCount
    }
  }
`;

export default function BestItemBoard() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const onClickBestItem = (e) => {
    router.push(`/market/${e.currentTarget.id}`);
  };
  return (
    <>
      <Wrapper>
        {data?.fetchUseditemsOfTheBest.map((el: any) => (
          <BestItemWrapper key={el._id} id={el._id} onClick={onClickBestItem}>
            {el.images[0] ? (
              <ThumbImg
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            ) : (
              <ThumbImgNone>
                이미지가
                <br />
                없습니다
              </ThumbImgNone>
            )}
            <BestWrapper>
              <BestLeft>
                <BestName>{el.name}</BestName>
                <BestRemarks>{el.remarks}</BestRemarks>
                <BestPrice>{Number(el.price).toLocaleString()}원</BestPrice>
              </BestLeft>
              <BestRight>
                <PickItemIcon />
                <PickItemCount>{el.pickedCount}</PickItemCount>
              </BestRight>
            </BestWrapper>
          </BestItemWrapper>
        ))}
      </Wrapper>
    </>
  );
}
