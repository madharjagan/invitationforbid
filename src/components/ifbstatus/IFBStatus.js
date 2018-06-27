import React, { Component } from 'react';
import { Table } from 'reactstrap';


class IFBStatus extends Component {


  render() {
      return (
        <div className="container">
        <form>
            <h1>IFB Status Page</h1>
          <Table datatable className="row-border hover">
            <thead>
              <tr>
                <th>Verdor Name</th>
                <th>Status</th>
                <th>Price</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC Vendor Company</td>
                <td>Pending with Vendor</td>
                <td>
                <p>
                  <button type="button" className="btn btn-default btn-sm" >
                    <span className="glyphicon glyphicon-pencil"></span> 1000 
                  </button>
                </p>
                </td>
                <td>
                  <button type="button" className="btn btn-default btn-sm" >
                    <span className="glyphicon glyphicon-trash"></span> Comments 
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </form>
      </div>
      );
  }
} 

export default IFBStatus;