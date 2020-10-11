import React,{ Component } from 'react';

export default class TaskItem extends Component {
  render(){
    return (
        <tr className="text-center">
            <td className="lh-3">1</td>
            <td className="lh-3">React</td>
            <td className="text-center lh-3">
                <span className="label label-success">Active</span>
            </td>
            <td className="lh-3 text-center">
                <button type="button" className="btn btn-success mr-5">Edit</button>
                <button type="button" className="btn btn-warning">Delete</button>
            </td>
        </tr>
    );
  }
}


