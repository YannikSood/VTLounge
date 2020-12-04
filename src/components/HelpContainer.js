import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import * as ROUTES from './routes/routes';
import './HelpContainer.css'

class HelpContainer extends React.Component {

    render() {
        return (
             <div className = "titleBox">
                 <div className = "title">Need Help?</div>
                 <Form>
                     <Form.Control type = "search" placeholder = "Search Here"> </Form.Control>
                 </Form>

             </div>
        );
    }
}

export default HelpContainer;