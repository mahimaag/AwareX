import React from 'react';
import {render} from 'react-dom';
import styles from '../src/assets/css/style.scss';
import UsageCard from '../src/components/UsageCard'
require('./assets/css/section.css');

const dummyUser = {
    name: 'Gaurav Gupta',
    profilePic: null
};

class App extends React.Component {
    render () {
        return (
            <div>
                <UsageCard />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));