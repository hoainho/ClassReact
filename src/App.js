import React,{ Component } from 'react';
import _ from 'lodash';
import './App.css';
import nextId from 'react-id-generator';
import { connect } from 'react-redux'
import InputForm from './components/inputForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import * as actions from './action/index';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      task : [],
      taskEditting : null,
      filter : {
        name : '',
        status : 0
      },
      keyWord : '',
      sortBy : 'name',
      sortValue : 1
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
    this.props.onToggleForm()
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
    var index = _.findIndex(task, (task)=> {
      return task.id === id
    })
    task[index].status = !task[index].status
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
    this.setState({
      filter : {
        name : filterName.toLowerCase(),
        status : filterStatus
      }
    })
  }
  onSearch = (data) => {
    console.log(data);
    this.setState({
      keyWord :data.toLowerCase(),
    })
  }
  onSort = (sortBy,sortValue) => {
    this.setState({
      sortBy  :sortBy,
      sortValue : sortValue
    })
  }
  render(){
    var { task, taskEditting ,filter, keyWord, sortBy,sortValue} = this.state
    var { isDisplayForm } = this.props // state from reducers
    if(filter){
      if(filter.name){
         task = task.filter( (item) => {
          return item.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
        task = task.filter( (item) => {
          if (filter.status === 0) { return item }
          else {
            return item.status === ( filter.status === 1 ? true : false )
          }
        })
    }
    if(keyWord){
      console.log(keyWord);
      task = task.filter((item) => {
        console.log(item.name.toLowerCase().indexOf(keyWord));
        return item.name.toLowerCase().indexOf(keyWord) !== -1
      })
    }
    if (sortBy === 'name') {
        task.sort((prev,after) => {
          if( prev.name > after.name ) { return sortValue }
          else if( prev.name < after.name ) { return -sortValue }
          else return 0 
        })
    }else{
        task.sort((prev,after) => {
          if( prev.status === true ) { return -sortValue }
          else{ return sortValue }
        })
    }
    var elmInputForm = isDisplayForm  ? <InputForm  onSubmit = { this.onSubmit }
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
                <Control onSearch = {this.onSearch} onSort = { this.onSort } sortBy = { sortBy } sortValue ={ sortValue }/>
                <div className="row">
                    <TaskList onUpdate = { this.onUpdate } onDelete = { this.onDelete } onFix = { this.onFix } onFilter = { this.onFilter }/>
                </div>
              </div>
                  
            </div>
            
          </div>
      </div>
    );
  }
}
const mapToProps = state =>{
  return{
  isDisplayForm : state.isDisplayForm
  }
}
const mapToActions = (dispatch,props) =>{
    return {
      onToggleForm : () => {
        dispatch(actions.onToggleForm())
      },
      onCloseForm : () => {
        dispatch(actions.onCloseForm())
      }
    }
}
export default connect(mapToProps,mapToActions)(App)

