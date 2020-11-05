import React,{ Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import InputForm from './components/inputForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import * as actions from './action/index';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filter : {
        name : '',
        status : 0
      },
      keyWord : '',
      sortBy : 'name',
      sortValue : 1
    }
  }
 //redux
  onToggleForm = () => {
    var { taskEditing } = this.props;
    if(taskEditing && taskEditing.id !== null){
      this.props.onOpenForm();
    }else{
      this.props.onToggleForm();
    }
    this.props.onClear({ // onUpdate , call function onUpdate so that state be update into null
      id : '',
      name : '',
      status : false
    })
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
    var {  sortBy,sortValue} = this.state
    var { isDisplayForm } = this.props // state from reducers
    // if(filter){
    //   if(filter.name){
    //      task = task.filter( (item) => {
    //       return item.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //     task = task.filter( (item) => {
    //       if (filter.status === 0) { return item }
    //       else {
    //         return item.status === ( filter.status === 1 ? true : false )
    //       }
    //     })
    // }
    // if(keyWord){
    //   console.log(keyWord);
    //   task = task.filter((item) => {
    //     console.log(item.name.toLowerCase().indexOf(keyWord));
    //     return item.name.toLowerCase().indexOf(keyWord) !== -1
    //   })
    // }
  
      
    return (
      <div className="App">
          <div className="container">
            <div className="text-center">
              <hr/><h1> MANAGEMENT TASK</h1><hr/>
            </div>
            <div className="row">
                <InputForm />  
              <div className={ isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button type="button" className="btn btn-primary mr-5"  onClick={ this.onToggleForm}>
                    <span className="fa fa-plus-square mr-5"/>
                      Add Task
                </button>
                <Control onSearch = {this.onSearch} sortBy = { sortBy } sortValue ={ sortValue }/>
                <div className="row ml-0">
                    <TaskList />
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
  isDisplayForm : state.isDisplayForm,
  taskEditing : state.updateTask
  }
}
const mapToActions = (dispatch,props) =>{
    return {
      onToggleForm : () => {
        dispatch(actions.onToggleForm())
      },
      onClear : task => {
        dispatch(actions.onUpdateData(task))
      },
      onOpenForm : () => {
        dispatch(actions.onOpenForm())
      }
    }
}
export default connect(mapToProps,mapToActions)(App)

