import React, {Component} from 'react';

class MyPractice2 extends Component {
  state = {
    email:'',
    username: '',
    password: '',
    correctPw:false,
    list: []
  };
  idNum = 1;

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    if (prevState.correctPw) {
      this.setState({
        correctPw: false
      });
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target; // e.target의 name은 username or password일것이기 때문에

    this.setState({
      [name]: value,
    });

    // this.isSafe(e);
    if([name][0] === "password") {
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

  // isSafe = (e) => {
  //   const {name, value} = e.target; // e.target의 name은 username or password일것이기 때문에
  //
  //   if([name][0] === "password") {
  //     if([value][0].length >= 6) {
  //       console.log("6자리이-통과");
  //       this.setState({
  //         correctPw: true
  //       })
  //     } else if([value][0].length < 6) {
  //       this.setState({
  //         correctPw: false
  //       })
  //     }
  //   }
  // };


  handleAddList = (e) => {
    const {email, username, password, list} = this.state;
      this.setState({
        email:'',
        username: '',
        password: '',
        // 추가버튼 누르면 username,password input창은 다시 빈 상태로 리셋되야 하므로
        list: list.concat({
          email, username, password, id: this.idNum
        })
      });
      this.idNum++
    }

  throwError = () => {
    // alert("비밀번호를 6자리 이상 입력해주세요.")

  }


  render() {
    const {email, username, password, list, correctPw} = this.state;
    return (
      <div>
        email : <input type="email" name="email" value={email} onChange={this.handleChange}/>
        username : <input type="text" name="username" value={username} onChange={this.handleChange}/>
        password : <input type="password" name="password" value={password} onChange={this.handleChange}/>
        <button onClick={correctPw === true ? this.handleAddList : this.throwError} disabled={!correctPw}>click-AddList</button>
        <ul>
          {/*ul안에서 list를 map돌면서 li그릴 예정*/}
          {list.map((value) => {
            return (
              <li keyId={value.id}>
                email : {value.email} | username : {value.username} | password : {value.password} | keyId : {value.id}
              </li>
            );
          })}
        </ul>
      </div>
    )
  }

}

export default MyPractice2;