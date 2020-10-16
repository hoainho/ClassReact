import React,{ Component } from 'react';
import _ from 'lodash';
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
      isDisplayForm : false,
      isFixForm : null
    }
  }
  componentWillMount() {
  if(localStorage && localStorage.getItem('task')){
    var task = JSON.parse(localStorage.getItem('task'));
    this.setState({
      task
    })
 }
}

  onToggleForm = () => {
    this.setState({
      isDisplayForm :true,
      isFixForm : null
    })
  } 
  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    })
  }
  onSubmit = (data) => {
    var { task } = this.state
      if ( data.id === '' ){
        data.id = nextId();
        task.forEach((task) => {
          if(task.id === data.id){
            data.id = nextId();
          }
          });
        task.push(data);
      }else{
          var index = _.findIndex(task,data.id);
          task[index] = data   
      }
    this.setState({
      task ,
      isFixForm : null
    })
    localStorage.setItem('task', JSON.stringify(task))
  }
  onUpdate = (id) =>{
    var { task } = this.state
    task[id].status = !task[id].status
    this.setState({
      task 
    })
    localStorage.setItem('task',JSON.stringify(task))
  }
  onDelete = (id) =>{
    var { task } = this.state
    task.splice(id,1);
    this.setState({
      task 
    })
    localStorage.setItem('task',JSON.stringify(task))
  }
  onFix = (data) =>{
    var { task } = this.state
    var index = _.findIndex(task,data);
    console.log(index);
    var onFixForm = task[index];
    console.log(onFixForm);
    this.setState({
      onFixForm
    })
    this.onToggleForm();
  }
  render(){
    var { task, isDisplayForm, onFixForm } = this.state
    var elmInputForm = isDisplayForm  ? <InputForm  onCloseForm={ this.onCloseForm }
                                                    onSubmited = { this.onSubmit }
                                                    onFill = { onFixForm }
                                                  />  
                                      : ''
    return (
      <div className="App">
          <div className="container">
            <div className="text-center">
              <hr/><h1> MANAGEMENT TASK</h1><hr/>
            </div>
            <div className="row">
              <div className={ isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "display-none"}>
                {elmInputForm}
              </div>
              <div className={ isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button type="button" className="btn btn-primary mr-5"  onClick={ this.onToggleForm }>
                    <span className="fa fa-plus-square mr-5"/>
                      Add Task
                </button>
                <Control />
                <div className="row">
                    <TaskList items ={ task } onUpdate = { this.onUpdate } onDelete = { this.onDelete } onFix = { this.onFix } />
                </div>
              </div>
                  
            </div>
            
          </div>
      </div>
    );
  }
}


