import React,{ Component } from 'react';
import './App.css';
import nextId from 'react-id-generator';
import InputForm from './components/inputForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      task : [],
      isDisplayForm : true
    }
  }
 
//   GenerateData = ()=> {
//     var task = [
//       {
//         id : this.GenerateID,
//         name : 'React',
//         status: true,
//       },
//       {
//         id : this.GenerateID,
//         name : 'Angular',
//         status: false,
//       },
//       {
//         id : this.GenerateID,
//         name : 'Html',
//         status: true,
//       }
//     ];
//     this.setState({
//       task
//     });
//     localStorage.setItem('task', JSON.stringify(task));
// }
  componentWillMount() {
  if(localStorage && localStorage.getItem('task')){
    var task = JSON.parse(localStorage.getItem('task'));
    this.setState({
      task : task
    })
 }
}

  onToggleForm = () => {
    this.setState({
      isDisplayForm :true
    })
  } 
  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    })
  }
  onSubmit = (data) => {
    var { task } = this.state
    data.id = nextId();
    task.push(data);
    this.setState({
      task 
    })
    localStorage.setItem('task', JSON.stringify(task))

  }
  render(){
    var { task,isDisplayForm } = this.state
    return (
      <div className="App">
          <div className="container">
            <div className="text-center">
              <hr/><h1> MANAGEMENT TASK</h1><hr/>
            </div>
            <div className="row">
              <div className={ isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "display-none"}>
                <InputForm  onCloseForm={ this.onCloseForm }
                            onSubmit = { this.onSubmit }
                /> 
              </div>
              <div className={ isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button type="button" className="btn btn-primary mr-5"  onClick={ this.onToggleForm }>
                    <span className="fa fa-plus-square mr-5"/>
                      Add Task
                </button>
                <button type="button" className="btn btn-info" onClick={ this.GenerateData }>
                  <span className="fa fa-plus-square mr-5" />
                      Generate Data
                </button>
                <Control />
                <div className="row">
                    <TaskList items ={ task }/>
                </div>
              </div>
                  
            </div>
            
          </div>
      </div>
    );
  }
}


