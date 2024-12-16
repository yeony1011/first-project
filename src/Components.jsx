import React, { Component } from "react";

// 1. 클래스 형태의 컴포넌트 작성 방법 ( 예전 방식 )
class ClassComp extends Component {
  render() {
    return <p>Class Comp</p>;
  }
}

// 2. 함수형 컴포넌트 방법 ( 일반 함수 형태 )
function FunctionComp() {
  return <p>Function Comp</p>;
}

// 3. 함수형 컴포넌트 방법 ( 화살표 함수 형태 : this 바인딩 문제로 자유로워 많이 쓰임 )
const ArrowFunctionComp = () => {
  return <p>Arrow Function Comp</p>;
}

export { ClassComp, FunctionComp, ArrowFunctionComp };