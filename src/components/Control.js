import React,{ Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../action/index';
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord : ''
        }
    }
    onHandleChange = (event) => {
        var target = event.target
        var value = target.value
        var name = target.name
        this.setState({
            [name] : value
        })
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyWord)
    }
    onSort = (sortBy,sortValue) => {
        this.props.onSort(sortBy,sortValue);
    }
  render(){
      var {keyWord} = this.state
      var { sortBy , sortValue } = this.props
    return (
        <div className="row mt-5 mb-5">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 search-control">
                <input type="search" name="keyWord" value={keyWord} onChange={this.onHandleChange} className="form-control mr-5" placeholder="Enter Your KeyWord..."/>
                <button type="button" className="btn btn-primary" onClick={this.onSearch}> Search </button>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle mr-5" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Dropdown
                    <span className="caret ml-5"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li className="text-center"  onClick={ ()=> this.onSort('name', 1) }><span  className={sortBy === 'name' && sortValue === 1 ? "sort-selected" : ""} >A {"->"} Z</span></li>
                        <li className="text-center" onClick={ ()=> this.onSort('name',-1) }><span  className={sortBy === 'name' && sortValue === -1 ? "sort-selected" : ""}>Z {"->"} A</span></li>
                        <li className="divider"></li>
                        <li className="text-center"  onClick={ ()=> this.onSort('status', 1) }><span  className={sortBy === 'status' && sortValue === 1? "sort-selected" : ""}>Active</span></li>
                        <li className="text-center" onClick={ ()=> this.onSort('status',-1) }><span  className={sortBy === 'status' && sortValue === -1? "sort-selected" : ""}>InActive</span></li>
                        <li className="divider"></li>
                        <li className="text-center"><span  >Something else here</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}
const mapToState = state => {
    return state
}
const mapToAction = (dispatch, props) => {
    return {
        onSort : (name,value) => {
            dispatch(actions.onFilterData(name,value))
        }
    }
}
export default connect(mapToState,mapToAction)(TaskForm)
