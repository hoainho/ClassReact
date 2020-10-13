import React,{ Component } from 'react';
export default class inputForm extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            name : '',
            status : false
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
    onSubmit = (event) => {
        event.preventDefault();   
        this.props.onSubmit(this.state); 
    }
  render(){
    var { onCloseForm } =  this.props
    return (
        <div className="panel panel-primary">
            <div className="panel-heading ">
                <h3 className="panel-title w-100">input Form
                    <span className="far fa-times-circle button-space" onClick={ onCloseForm }></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit= {this.onSubmit}>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" value={ this.state.name } name="name" onChange={ this.onHandleChange }/>
                    <label >Status</label>
                    <select value={ this.state.status   } name="status" className="form-control" onChange={ this.onHandleChange }>
                        <option value={ true }>Active</option>
                        <option value={ false }>InActive</option>
                    </select>
                </div>
                
                <button type="reset" className="btn btn-primary mr-5">Reset</button>
                <button type="submit" className="btn btn-primary" onClick={ this.onSubmit }>Submit</button>
                </form>
                
            </div>
        </div>
        
    );
  }
}


