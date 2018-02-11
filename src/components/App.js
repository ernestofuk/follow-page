import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap'
import './statics/css/bootstrap.css';


class App extends Component {
    render() {
        return (
            <div className="App" >
                <Button bsStyle="danger"> <Glyphicon glyph="star" /> Test </Button>
            </div>
                );
    }
}

export default App;