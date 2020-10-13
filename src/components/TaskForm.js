import React,{ Component } from 'react';
import Control from './Control';
import TaskList from './TaskList';
export default class TaskForm extends Component {
 
 
  render(){
    return (
         <>           
                <Control />
                <div className="row">
                    <TaskList/>
                </div>
         </>
    );
  }
}


