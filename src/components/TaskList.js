import React,{ Component } from 'react';
import TaskItem from './TaskItem';
export default class TaskList extends Component {
  render(){
    return (
        <div className="panel panel-primary">
                <div className="panel-heading ">List Task</div>
                <table className="table">
                    <thead>
                        <tr className="text-center">
                        <th  className="text-center">STT</th>
                        <th  className="text-center">NAME</th>
                        <th  className="text-center">STATUS</th>
                        <th  className="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td></td>
                        <td>
                            <input type="search" name="" className="form-control" value="" />
                        </td>
                        <td>
                            <select name="" id="input" className="form-control">
                            <option value="0">All</option>
                            <option value="1">Active</option>
                            <option value="-1">Inactive</option>
                            </select>
                        </td>
                        <td></td>
                        </tr>
                            <TaskItem/>
                    </tbody>
                </table>
        </div>

    );
  }
}


