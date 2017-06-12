import React from 'react';
import {render} from 'react-dom';
require('./assets/css/section.css');

const dummyUser = {
    name: 'Gaurav Gupta',
    profilePic: null
};

class App extends React.Component {
    render () {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));