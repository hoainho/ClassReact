import React,{ Component } from 'react';
import Control from './Control';
import TaskList from './TaskList';
export default class TaskForm extends Component {
 
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
  render(){
    return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary mr-5">
                <span className="fa fa-plus-square mr-5"/>
                    Add Task
                </button>
                <button type="button" className="btn btn-info" onClick={this.GenerateData}>
                <span className="fa fa-plus-square mr-5" />
                    Generate Data
                </button>
                    <Control />
                <div className="row">
                    <TaskList/>
                </div>
            </div>

    );
  }
}


