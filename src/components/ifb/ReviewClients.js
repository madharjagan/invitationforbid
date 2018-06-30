import React, { Component} from 'react'
import { states } from './States';
import { Form } from 'semantic-ui-react'

var axios = require('axios');

class ReviewClients extends Component{

constructor(props){
    super(props)
     this.state = {
        vendorDetails:''      
    };
    this.fetchVendorDetails = this.fetchVendorDetails.bind(this);

}

fetchVendorDetails() {
     axios.get(`http://localhost:8080/getVendorDetailsForType?vendorType=${this.props.selectedVendor}`)
        .then(resp => {   
          this.state.vendorDetails = JSON.stringify(resp.data);
          this.props.fetchVendorDetails(this.state.vendorDetails);
          this.props.next(states.REVIEW_VENDORS);
      }); 
  }
    render(){
        return(
          <div className="container">
            <h3 className="well">Client Page</h3>
            <br/>
            <br/>
            <br/>
            <div className="col-lg-12 well">
               <button type="button"  className="col-sm-2 btn btn-lg btn-info" 
                    primary onClick={this.fetchVendorDetails}
                    >Proceed</button> 
              <br/>
              <br/>
              <br/>
            </div>
        </div>
        
        )
    }


}

export default ReviewClients