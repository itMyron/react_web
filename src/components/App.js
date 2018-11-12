import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import routes from "../routers";
import "./style.scss";
class App extends Component {
    render() {
        return( 
            <Router routes={routes}>
                <div className='contain'>
                    {routes}
                </div>
            </Router>
        );
    }
}

export default App;
