import React, { Component} from 'react'
import { states } from './States';
import { Form } from 'semantic-ui-react'
import ClientSiteDetails from './ClientSiteDetails';


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
     axios.get(`http://localhost:8082/getVendorDetailsForType?vendorType=${this.props.selectedVendor}`)
        .then(resp => {   
          this.state.vendorDetails = JSON.stringify(resp.data);
          this.props.fetchVendorDetails(this.state.vendorDetails);
          this.props.next(states.REVIEW_VENDORS);
      }); 
  }
    render(){
      
        return(
          <div className="container">
            <div className="col-lg-20 well">
                <div className="row">
                        {this.props.siteDetails.siteDetails.map(clientsite => <ClientSiteDetails key={clientsite.clientname} name = {clientsite.clientname} property= {clientsite.property} updateClientSite={this.props.updateClientSite}/>
                        )}
                        
                </div>
            </div>
        </div>
        
        )
    }

}

export default ReviewClients