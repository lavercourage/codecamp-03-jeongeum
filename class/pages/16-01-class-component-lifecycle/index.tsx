import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class ClassComponentLifecyclePage extends Component {
  inputRef = createRef<HTMLInputElement>();

  state = {
    count: 0,
  };

  componentDidMount = () => {
    console.log("컴포넌트 마운트 완료!!");
    this.inputRef.current.focus();
  };

  componentDidUpdate = () => {
    console.log("컴포넌트 수정 완료!!");
  };

  componentWillUnmount = () => {
    console.log("잘가요..");
  };

  onClickCount = () => {
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        현재카운트: {this.state.count}
        <button onClick={this.onClickCount}>카운트 증가</button>
        <button onClick={this.onClickMove}>페이지 이동하기</button>
        <input type="text" ref={this.inputRef} />
      </>
    );
  }
}
