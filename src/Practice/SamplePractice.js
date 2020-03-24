import React, {Component} from 'react';

class SamplePractice extends Component {

  state = {
    username: '',
    password: '',
    list: []
  };

  id = 1;

  handleChange = e => {
    console.log(e.target)
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };
  //Q. state에는 name도, value도 없는데 어떻게 setState를 할 수 있는지와, 왜 [name]: value 가 화면의 input에 출력되는지?

  handleInsert = () => {
    const {list, username, password} = this.state;
    this.setState({
      list: list.concat({
        username,
        password,
        id: this.id
      }),
      username: '',
      password: ''
    });
    this.id++;
  };

  render() {
    const {username, password, list} = this.state;
    return (
      <div>
        <input type="text" name="username" value={username} onChange={this.handleChange}/>
        <input type="password" name="password" value={password} onChange={this.handleChange}/>
        <button onClick={this.handleInsert}>추가하기</button>
        <ul>
          {list.map(item => {
            return (
              <li key={item.id}>
                {/*Q. key가 왜 필요한지랑?어떤경우게 필요한건지 ?*/}
                {item.username}의 패스워드는 {item.password}입니다. + {item.id}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SamplePractice;