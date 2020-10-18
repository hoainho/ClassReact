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
      taskEditting : null,
      filter : {
        name : '',
        status : -1
      }
    }
  }
  componentWillMount() {
  if(localStorage && localStorage.getItem('task')){
    var task = JSON.parse(localStorage.getItem('task'));
    this.setState({
      ...this.state,
      task,
    })
 }
}
  onToggleForm = () => {
    this.setState({
      isDisplayForm :true,
    })
  } 
  onCloseForm = () => {
    this.setState({
      isDisplayForm : false,
      taskEditting : null
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
         task.push(data)
      }else{
          let index = _.findIndex(task, function(task){ return task.id === data.id});
          task[index] = data
      }
      this.setState({
        ...this.state,
        task,
      })
      localStorage.setItem('task',JSON.stringify(task));
  }
  onUpdate = (id) =>{
    var { task } = this.state
    task[id].status = !task[id].status
    this.setState({
      ...this.state,
      task
    })
    localStorage.setItem('task',JSON.stringify(task))
  }
  onDelete = (id) =>{
    var { task } = this.state
    var index = _.findIndex(task ,function(item){ return item.id === id})
    task.splice(index,1);
    this.setState({
      task  
    })
    localStorage.setItem('task',JSON.stringify(task))
  }
  onFix = (data) =>{
    var { task } = this.state
    var index = _.findIndex(task , function(task) { return task.id === data.id; }); //find Index
    var taskEditting = task[index];
    this.setState({
      ...this.state,
      taskEditting,
    })
    this.onToggleForm();
  }
  onFilter = (filterName,filterStatus) => {
    filterStatus = parseInt(filterStatus,10)
    console.log(filterName, '-' , filterStatus);
    this.setState({
      filter : {
        name : filterName.toLowerCase(),
        status : filterStatus
      }
    })
  }
  render(){
    var { task, isDisplayForm, taskEditting ,filter} = this.state
    if(filter){
      if(filter.name){
         task = task.filter( (item) => {
           console.log(item.name.toLowerCase().indexOf(filter.name));
          return item.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
        task = task.filter( (item) => {
          console.log(item);
          if (filter.status === 0) { return item }
          else {
            return item.status === ( filter.status === 1 ? true : false )
          }
        })
    }
    var elmInputForm = isDisplayForm  ? <InputForm  onCloseForm={ this.onCloseForm }
                                                    onSubmit = { this.onSubmit }
                                                    onFill = { taskEditting }
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
                <button type="button" className="btn btn-primary mr-5"  onClick={ this.onToggleForm}>
                    <span className="fa fa-plus-square mr-5"/>
                      Add Task
                </button>
                <Control />
                <div className="row">
                    <TaskList items ={ task } onUpdate = { this.onUpdate } onDelete = { this.onDelete } onFix = { this.onFix } onFilter = { this.onFilter }/>
                </div>
              </div>
                  
            </div>
            
          </div>
      </div>
    );
  }
}


