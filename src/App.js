import React, {Component} from 'react';
import './App.css';
import Shelves from './components/Shelves'


class App extends Component {

  state = {
    books: [
      { id:'1', title: 'Une Vie', author:'Maupassant', status: 'Reading'},
      { id:'2', title: 'Tintin', author:'Herge', status: 'Wanna read'},
      { id:'3', title: 'Lords of the Rings', author:'Tolkien', status: 'Reading'},
    ]
  }

  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          My Reads project
        </header>
          <Shelves
            books = {this.state.books} />
      </div>
    );

  }
  
}




export default App;
