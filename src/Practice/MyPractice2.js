import React, {Component} from 'react';

class MyPractice2 extends Component {
  state = {
    username: '',
    password: '',
    correctPw:false,
    list: []
  };
  idNum = 1;

  handleChange = (e) => {
    const {name, value} = e.target; // e.target의 name은 username or password일것이기 때문에
    const {correctPw} = this.state; // Q. ???비구조화 할달이 이자리에 선언되야 할지 ??? ??

    this.setState({
      [name]: value,
    });

    if([name][0] === "password") {
      const {correctPw} = this.state; // Q. ???비구조화 할달이 이자리에 선언되야 할지 ??? 그런데 두 줄 다 왜 correctPw state값이 사용이 안되고있는지 모르겠다.
      if([value][0].length >= 6) {
        console.log("6자리이-통과");
        this.setState({
          correctPw: true
        })
      } else if([value][0].length < 6) {
        this.setState({
          correctPw: false
        })
      }
    }

  };


  handleAddList = (e) => {
    const {username, password, list} = this.state;
      this.setState({
        username: '',
        password: '',
        // 추가버튼 누르면 username,password input창은 다시 빈 상태로 리셋되야 하므로
        list: list.concat({
          username, password, id: this.idNum
        })
      });
      this.idNum++
    }

  throwError = () => {
    // alert("비밀번호를 6자리 이상 입력해주세요.")

  }


  render() {
    const {username, password, list, correctPw} = this.state;
    return (
      <div>
        username : <input type="text" name="username" value={username} onChange={this.handleChange}/>
        password : <input type="password" name="password" value={password} onChange={this.handleChange}/>
        <button onClick={correctPw === true ? this.handleAddList : this.throwError}>click-AddList</button>
        <ul>
          {/*ul안에서 list를 map돌면서 li그릴 예정*/}
          {list.map((value) => {
            return (
              <li keyId={value.id}>
                username : {value.username} / password : {value.password} / keyId : {value.id}
              </li>
            );
          })}
        </ul>
      </div>
    )
  }

}

export default MyPractice2;