import React, { Component }from "react";
import SamplePractice from "../Practice/SamplePractice"
import PropTypes from "prop-types";


  class Practice2 extends Component {
    render() {
      const {nickname, children,food} = this.props;

      return (
    <div>
      <div>나의 새롭고 멋진 함수형 컴포넌트 + {nickname} + {children}</div>
      <div>제가 좋아하는 {food}는 삼계탕 입니다.</div>
    </div>
  )
}
};

Practice2.propTypes = {
  nickname: PropTypes.string,
  children: PropTypes.string,
  food:PropTypes.string.isRequired
};

export default Practice2;