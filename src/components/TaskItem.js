import React,{ Component } from 'react';

export default class TaskItem extends Component {
  render(){
    var { item, index } = this.props;
    return (
        <tr className="text-center">
            <td className="lh-3">{ index + 1 }</td>
            <td className="lh-3">{ item.name }</td>
            <td className="text-center lh-3">
                <span className={ item.status === true ? 'label label-success ' : 'label label-warning '}>{ item.status === true ? 'Active' : 'InActive'}</span>
            </td>
            <td className="lh-3 text-center">
                <button type="button" className="btn btn-success mr-5">Edit</button>
                <button type="button" className="btn btn-warning">Delete</button>
            </td>
        </tr>
    );
  }
}


