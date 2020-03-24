import React, { Component } from "react";
import Practice2 from "./Practice2";


class Practice1 extends Component {
  render() {
    const name = "Rachel";
    const age = 30;
    const number = 0;
    const isVal = undefined;

    const style = {
      backgroundColor : "pink"
    }

    return(
      <div>
        <div>
        {name === "김영지" ? <h1 style={{backgroundColor : "red"}}>김영지 입니다.</h1> : <h1 style={{backgroundColor : "yellow"}}> 이름은 김영지가 아닙니다.</h1>}
        </div>
        <div>
          {age === 30 && <h1 style={style}>30살 입니다.</h1>}
          {number && <h1>{number}입니다.</h1>}
          {isVal || <h1 style={{backgroundColor : "grey"}}>"값이 없습니다."</h1>}
        </div>
        <Practice2 nickname={"스트링"} food={"음식"}>children입니다.</Practice2>
      </div>
    )
  }
}
export default Practice1;