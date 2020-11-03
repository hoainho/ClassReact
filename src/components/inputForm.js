import React,{ Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../action/index';

 class inputForm extends Component {
   constructor(props) {
     super(props);
     this.state = {
       id : '',
       name : '',
       status: false
     }
   }
    componentWillMount() {
      if(this.props.updateTask && this.props.updateTask.id !== null){
        this.setState({
          id : this.props.updateTask.id,
          name : this.props.updateTask.name,
          status : this.props.updateTask.status
        })
      }
      this.onClear();
    }
    onHandleChange =(event) => {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        if(name === 'status'){
          value = target.value === 'true' ? true : false
        }
         this.setState({
          [name] : value
         })
        
      }
    
    onClear = () => {
      this.setState({
        name : '',
        status : false
      })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state);
        this.onClear();
        this.props.onCloseForm();
    }
  render(){
    var { onCloseForm, isDisplayForm } =  this.props
    var { id } = this.state
    console.log(this.state);
    if(!isDisplayForm) return '';
    return (
        <div className="panel panel-primary col-xs-4 col-sm-4 col-md-4 col-lg-4 px-0">
            <div className="panel-heading ">
                <h3 className="panel-title w-100">{id === '' ? "input Form" : "Update Form"}
                    <span className="far fa-times-circle button-space" onClick={ onCloseForm }></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit= {this.onSubmit}>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" value={ this.state.name } name="name" onChange={ this.onHandleChange }/>
                    <label >Status</label>
                    <select value={ this.state.status } name="status" className="form-control" onChange={ this.onHandleChange }>
                        <option value={ true }>Active</option>
                        <option value={ false }>InActive</option>
                    </select>
                </div>  
                <button type="button" className="btn btn-primary mr-5" onClick = { this.onClear } >Reset</button>
                <button type="submit" className="btn btn-primary" onClick={ this.onSubmit }>Submit</button>
                </form>
                
            </div>
        </div>
        
    );
  }
}

const getState = state => {
  return {
    isDisplayForm : state.isDisplayForm,
    task : state.tasks,
    updateTask : state.updateTask
  }
}
const getAction = ( dispatch,props ) => {
  return {
    addTask : (task) => {
        dispatch(actions.addTask(task))
    },
    onCloseForm : () => {
      dispatch(actions.onCloseForm())
    },
    onUpdateData : task => {
      dispatch(actions.onUpdateData(task))
    }
  }
}
export default connect(getState,getAction)(inputForm);
