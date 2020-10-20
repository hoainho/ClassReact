import React,{ Component } from 'react';

export default class TaskItem extends Component {
  onUpdate = () =>{
    this.props.onUpdate(this.props.item.id);
  }
  onDelete = () =>{
    this.props.onDelete(this.props.item.id);
  }
  onFix = () => {
    this.props.onFix(this.props.item);
  }
  render(){
    var { item, index } = this.props;
    return (
        <tr className="text-center">
            <td className="lh-3">{ index + 1 }</td>
            <td className="lh-3">{ item.name }</td>
            <td className="text-center lh-3">
                <span className={ item.status === true ? 'label label-success ' : 'label label-warning '}
                      onClick = { this.onUpdate }
                >{ item.status === true ? 'Active' : 'InActive'}</span>
            </td>
            <td className="lh-3 text-center">
                <button type="button" className="btn btn-success mr-5" onClick={ this.onFix }>Edit</button>
                <button type="button" className="btn btn-warning" onClick={ this.onDelete }>Delete</button>
            </td>
        </tr>
    );
  }
}


