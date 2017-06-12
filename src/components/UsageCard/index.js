import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';

class UsageCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <CircularProgressbar percentage={10} />
        );
    }
}

export default UsageCard;
