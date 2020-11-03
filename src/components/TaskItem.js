import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/index';

class TaskItem extends Component {
  onUpdate = () =>{
    this.props.onUpdateStatus(this.props.item.id);
  }
  onDelete = () =>{
    this.props.onDelete(this.props.item.id);
  }
  onFix = () => {
    this.props.onToggle();
    this.props.onUpdateData(this.props.item);
  }
  render(){
    var { item , index} = this.props;
    return (
        <tr className="text-center">
            <td className="lh-3">{ index + 1 }</td>
            <td className="lh-3">{ this.props.item.name }</td>
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


const mapitemtoProps = state => {
  return {
    state
  }
}
const mapActToProps = (dispatch,props) => {
  return {
      onUpdateStatus : (id) => {
          dispatch(actions.onUpdateStatus(id))
      },
      onDelete : (id) => {
        dispatch(actions.onDelete(id))
      },
      onToggle : () => {
        dispatch(actions.onToggleForm())
      },
      onUpdateData : task => {
        dispatch(actions.onUpdateData(task))
      }
  }
}
export default connect(mapitemtoProps,mapActToProps)(TaskItem)