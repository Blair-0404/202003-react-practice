import React, {Component} from 'react';

class MyPractice2 extends Component {

  state = {
    email: '',
    username: '',
    password: '',
    list: []
  };

  idNum = 1;
  correctPw = false;

  handleChange = (e) => {
    const {name, value} = e.target; // e.target의 name은 username or password일것이기 때문에

    this.setState({
      [name]: value,
    });

    this.isSafe(e);
  };

  isSafe = (e) => {
    const {email, username, password} = this.state;
    const checkLow = new RegExp("(?=.*[a-z[])");
    const checkUpper = new RegExp("(?=.*[A-Z[])");
    console.log(checkLow.test(password));
    console.log(checkUpper.test(password));

    if ((password.length >= 6) && (!password.includes(username)) && (checkLow.test(password)) && (checkUpper.test(password))) {
      console.log("통과");
      this.correctPw = true;
    } else {
      console.log("불통과");
      this.correctPw = false;
    }
  };

  handleAddList = () => {
    const {email, username, password, list} = this.state;
    this.setState({
      email: '',
      username: '',
      password: '',
      // 추가버튼 누르면 username,password input창은 다시 빈 상태로 리셋되야 하므로
      list: list.concat({
        email, username, password, id: this.idNum
      })
    });
    this.idNum++;
    this.correctPw = false;
  };

  render() {
    const {email, username, password, list} = this.state;

    return (
      <div>
        email : <input type="email" name="email" value={email} onChange={this.handleChange}/>
        username : <input type="text" name="username" value={username} onChange={this.handleChange}/>
        password : <input type="password" name="password" value={password} onChange={this.handleChange}/>
        <button onClick={this.correctPw === true ? this.handleAddList : null}
                disabled={!this.correctPw}>click-AddList
        </button>
        <ul>
          {/*ul안에서 list를 map돌면서 li그려나갈 예정*/}
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