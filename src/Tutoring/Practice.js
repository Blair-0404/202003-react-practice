import React, {Component} from "react";

class App extends Component {
  state = {
    noinput: '관리를 안하면 안바뀐다.',
    input: 'willchange',
    username: '',
    password: '',
    list: []
  };
  keyid = 1;

  handleChange = e => {
    // console.log(e.target.value);
    console.log(e.target);
    this.setState({
      input: e.target.value
    });
  };

  // handleInsert = () => {
  //   // const {username, password} = this.state; ???
  //
  // //   this.setState({
  // //     list: this.state.list.concat({
  // //       username: this.state.username,
  // //       password: this.state.password
  // //     })
  // //   });
  // // };

  // 방법1
  // const name = e.target.name;
  // const value = e.target.value;
  // const {name, value} = e.target;
  // const update = {};
  // update[name] = value;
  // 바뀐네임에 따라서 키값으로 쓰겠다
  // this.setState(update);
  // 그걸 state에 다시 반영하겠다,

  // 방법2
  // const{name, value} = e.target;
  // this.setState({
  //   [name]: value // []반드시 써주기
  // });

  render() {
    const {noinput, input, username, password, list} = this.state;
    return (
      <div>
        <input value={noinput}/>
        <input value={input} onChange={this.handleChange}/>

        <input name="username" value={username} onChange={this.handleChange}/>
        <input name="password" value={password} onChange={this.handleChange}/>
        {/*input안에 *name을 적어줘야 누가 변하는지 알수있다*/}
        <button onClick={this.handleInsert}>추가하기</button>
        <ul>
          {list.map(item => {
            return (
              <li key={item.id}>
                {/*키값을 인덱스값으로 주기*/}
                {item.username}의 패스워드는 {item.password}입니다.
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


export default App;

//깨알 문법
//ES6객체 비구조화 할당 (객체 속성 두개 다 가져올수있는 방법) 추가공부하기!
// var person = {name:"ray", age:29}
// var {name, age} = person;

// 리액는 불변성 관리가중요 그래서 setstate슨다
// var arr = [1,2,3]
// arr.push(4,5,6)
// var arr2 = arr.concat(10,20,30) // 본사떠서 집어넣은
// 즉 arr2도 존재 arr도 그대로 존재


// 고유한 키값을 줘야 한다.

// 다음 시간  - 여기에 기능 더 붙일것이다. 컴퓨넌트를 기능별로 나눌것.
// 개념복습..
