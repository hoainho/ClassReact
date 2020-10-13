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
  GenerateData = ()=> {
    var task = [
      {
        id : 1,
        name : 'React',
        status: true,
      },
      {
        id : 2,
        name : 'Angular',
        status: false,
      },
      {
        id : 3,
        name : 'Html',
        status: true,
      }
    ];
    this.setState({
      task
    })
}
onDisplayForm = () => {

}
  render(){
    
    return (
      <div className="App">
          <div className="container">
            <div className="text-center">
              <hr/><h1> MANAGEMENT TASK</h1><hr/>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <InputForm /> 
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <TaskForm  />
                <button type="button" className="btn btn-primary mr-5" >
                    <span className="fa fa-plus-square mr-5"/>
                      Add Task
                </button>
                <button type="button" className="btn btn-info" onClick={ this.GenerateData }>
                  <span className="fa fa-plus-square mr-5" />
                      Generate Data
                </button>
              </div>
                  
            </div>
            
          </div>
      </div>
    );
  }
}


