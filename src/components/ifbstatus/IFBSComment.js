import React ,{ Component} from 'react';
import { Table } from 'reactstrap';

class IFBSComment extends Component{

    constructor(props){
        super(props);

    }

render(){

    return(
        <tr>
                <td>{this.props.comment.question}</td>
                <td>{this.props.comment.reply}</td>
        </tr>
    )
}

}

export default IFBSComment;