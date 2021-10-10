import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import LayoutHeaderUI from "./LayoutHeder.presenter";
import { FETCH_USER_LOGGED_IN } from "../../../unit/userInputdata/Login/LoginBoard.queries";

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const router = useRouter();

  function onClickHeader(event: any) {
    router.push(event.target.id);
  }
  return <LayoutHeaderUI onClickHeader={onClickHeader} data={data} />;
}
