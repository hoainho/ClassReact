import React,{ Component } from 'react';
import TaskItem from './TaskItem';
export default class TaskList extends Component {
  render(){
      var { items } = this.props
      var elmTask = items.map( (item,index) => {
       return <TaskItem key={ item.id } 
                        index={ index } 
                        item= { item } 
                        onUpdate = { this.props.onUpdate } 
                        onDelete = { this.props.onDelete }
                        onFix = { this.props.onFix }/>
      })
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
                                <input type="search" name="" className="form-control" />
                            </td>
                            <td>
                                <select name=""className="form-control">
                                <option value="0">All</option>
                                <option value="1">Active</option>
                                <option value="-1">Inactive</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        { elmTask }
                    </tbody>
                </table>
        </div>

    );
  }
}


