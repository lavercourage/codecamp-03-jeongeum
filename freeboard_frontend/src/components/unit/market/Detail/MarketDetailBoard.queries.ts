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
        _id
        name
        picture
      }
      soldAt
      createdAt
    }
  }
`;

// 상품 구매하기
export const CREATE_POINT_TRANS_ACTION_Of_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      buyer {
        _id
        userPoint {
          amount
        }
      }
    }
  }
`;

// 상품 찜하기(=좋아요 싫어요 비슷한듯)
export const ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

// 상품 삭제하기
export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

// 로그인한 사람 정보 불러오기
export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
