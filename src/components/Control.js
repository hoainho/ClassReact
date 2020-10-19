import React,{ Component } from 'react';


export default class TaskForm extends Component {
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
  render(){
      var {keyWord} = this.state
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
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="/">A {"->"} Z</a></li>
                    <li><a href="/">Z {"->"} A</a></li>
                    <li className="divider"></li>
                    <li><a href="/">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}


