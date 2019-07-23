import React, {Component} from 'react';
import './App.css';
import Validation from './Components/Validation/Validation';
import Char from './Components/Char/Char';

class App extends Component {
  state = {
    inputText: '',
  };

  inputTextHandler = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  deleteCharHandler = (index) => {
    const chars = this.state.inputText.split('');
    chars.splice(index, 1);
    this.setState({
      inputText: chars.join(''),
    });
  };

  render() {

    const charList = this.state.inputText.split('').map((letter, index) => {
      return <Char
          key={index}
          deleteChar={() => this.deleteCharHandler(index)}
          letter={letter}/>
    });

    let deleteMessage = null;

    if (this.state.inputText.length > 0) {
      deleteMessage = (<p>Click and delete us!</p>);
    }

    const inputStyle = {
      display: 'block',
      margin: '20px auto',
    };

    return (
      <div className="App">
        <input
            value={this.state.inputText}
            style={inputStyle}
            onChange={this.inputTextHandler}
            type='text'/>
        <Validation textLength={this.state.inputText.length}/>
        {charList}
        {deleteMessage}
      </div>
    );
  }
}

export default App;
