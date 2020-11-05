import React,{ Component } from 'react';
import TaskItem from './TaskItem';
import * as actions from '../action/index';
import { connect } from 'react-redux';
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName : '',
            filterStatus : 0
        }
    }
    onHandleChange = (event) =>{
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.props.onSort(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name] : value
        })
    }
    render(){
      var { filterName } = this.state
      var { filterStatus } = this.state
      var { items } = this.props
      var elmTask = items.map( (item,index) => {
       return <TaskItem key={ item.id } 
                        index={ index } 
                        item = { item }
                        />
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
                                <input type="search" name="filterName" value={ filterName } onChange={ this.onHandleChange } className="form-control" />
                            </td>
                            <td>
                                <select name="filterStatus" value={ filterStatus }  onChange={ this.onHandleChange } className="form-control">
                                    <option value="0">All</option>
                                    <option value="1">Active</option>
                                    <option value="-1">InActive</option> 
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
const mapDatatoProps = state => {
    return {
        items : state.tasks
    }
}
const mapActionToProps = (dispatch,props) => {
    return {
        onSort : (name,status) => {
            dispatch(actions.onSortData(name,status))
        }
    }
}
export default connect(mapDatatoProps,mapActionToProps)(TaskList);
