import React,{ Component } from 'react';
import './App.css';
import InputForm from './components/inputForm';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName : ''
    }
  }
  render(){
    
    return (
      <div className="App">
          <div className="container">
            <div className="text-center">
              <hr/><h1> MANAGEMENT TASK</h1><hr/>
            </div>
            <div className="row">
                {/* Input-Form */}
                  <InputForm/>
                {/* List-Form */}
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    
                    <button type="button" class="btn btn-primary">
                      <span class="fa fa-plus-square mr-5"/>
                      Add Task
                    </button>
                    <div class="row mt-5 mb-5">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 search-control">
                          <input type="search" name=""class="form-control mr-5" value="" placeholder="Enter Your KeyWord..."/>
                          <button type="button" class="btn btn-primary" > Search </button>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div class="dropdown">
                            <button class="btn btn-success dropdown-toggle mr-5" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              Dropdown
                              <span class="caret ml-5"></span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                              <li><a href="/">A {"->"} Z</a></li>
                              <li><a href="/">Z {"->"} A</a></li>
                              <li class="divider"></li>
                              <li><a href="/">Something else here</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
                        <div class="panel panel-primary">
                          <div class="panel-heading ">List Task</div>
                            <table class="table">
                              <thead>
                                <tr class="text-center">
                                  <th  class="text-center">STT</th>
                                  <th  class="text-center">NAME</th>
                                  <th  class="text-center">STATUS</th>
                                  <th  class="text-center">ACTION</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td>
                                    <input type="search" name="" class="form-control" value="" />
                                  </td>
                                  <td>
                                    <select name="" id="input" class="form-control">
                                      <option value="0">All</option>
                                      <option value="1">Active</option>
                                      <option value="-1">Inactive</option>
                                    </select>
                                  </td>
                                  <td></td>
                                </tr>
                                <tr class="text-center">
                                  <td class="lh-3">1</td>
                                  <td class="lh-3">React</td>
                                  <td class="text-center lh-3">
                                    <span class="label label-success">Active</span>
                                  </td>
                                  <td class="lh-3 text-center">
                                      <button type="button" class="btn btn-success mr-5">Edit</button>
                                      <button type="button" class="btn btn-warning">Delete</button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                        
                      </div>
                      
                    </div>
                </div>
            </div>
            
          </div>
      </div>
    );
  }
}


