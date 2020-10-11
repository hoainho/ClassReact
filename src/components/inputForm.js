import React,{ Component } from 'react';

export default class inputForm extends Component {
  render(){
    
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-primary">
            <div className="panel-heading ">
                <h3 className="panel-title w-100">input Form
                <span className="far fa-times-circle button-space"></span>
                </h3>
            </div>
            <div className="panel-body">
                <form className="">
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" />
                    
                    <label >Status</label>
                    <select name="" className="form-control">
                    <option value="">Active</option>
                    <option value="">Inactive</option>
                    </select>
                </div>
                
                <button type="reset" className="btn btn-primary mr-5">Reset</button>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </div>
        </div>
                    
        </div>
    );
  }
}


