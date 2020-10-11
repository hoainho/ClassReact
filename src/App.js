import React,{ Component } from 'react';
import './App.css';
import InputForm from './components/inputForm';
import TaskForm from './components/TaskForm';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task : []
    }
  }
  onHandleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value
    })
    
  }
  
  render(){
    
    return (
      <div className="App">
          <div className="container">
            <div className="text-center">
              <hr/><h1> MANAGEMENT TASK</h1><hr/>
            </div>
            <div className="row">
                {/* Input-Form */}
                  <InputForm onHandleChange/>
                {/* List-Form */}
                  <TaskForm   />
            </div>
            
          </div>
      </div>
    );
  }
}


