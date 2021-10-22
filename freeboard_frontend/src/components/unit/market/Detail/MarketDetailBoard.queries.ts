import { gql } from "@apollo/client";

// 상품 정보 불러오기
export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      buyer {
        name
      }
      seller {
        name
        picture
      }
      soldAt
      createdAt
    }
  }
`;

// 상품 구매하기

// 상품 찜하기(=좋아요 싫어요 비슷한듯)
export const ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
