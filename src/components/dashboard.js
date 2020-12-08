import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import * as ROUTES from './routes/routes';
import './HelpContainer.css'

class Dashboard extends React.Component {

    render() {
        return (
             <div className = "titleBox">
                 <div className = "title">Dashboard</div>

             </div>
        );
    }
}

export default Dashboard;