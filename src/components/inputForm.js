import React,{ Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../action/index';

 class inputForm extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            id : '',
            name : '',
            status : false
            }
    }
    
    componentWillMount() {
      if(this.props.onFill){
        this.setState({
          id : this.props.onFill.id,
          name : this.props.onFill.name,
          status : this.props.onFill.status
        })
      }
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
    onCloseForm =() => {
      this.props.onCloseForm();
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
        this.onCloseForm();
    }
  render(){
    var { onCloseForm } =  this.props
    var { id } = this.state
    return (
        <div className="panel panel-primary">
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
    
  }
}
const getAction = ( dispatch,props ) => {
  return {
    addTask : (task) => {
        dispatch(actions.addTask(task))
      
    }
  }
}
export default connect(getState,getAction)(inputForm);
