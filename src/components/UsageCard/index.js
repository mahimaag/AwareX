import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';
import UsageCategorySlider from '../UsageCategorySlider';
import SmsUsageCard from '../SmsUsageCard';
import DataUsageCard from '../DataUsageCard';
import VoiceUsageCard from '../VoiceUsageCard';
import config from '../config.json';

class UsageCard extends React.Component {
    constructor(props) {
        super(props);
    }

    getSliderComponents(sliderItems){
        console.log('hjhbhjbh', sliderItems)
        let items;
        items = sliderItems.map(item => {
            if (item) {
                switch (item) {
                    case 'Data':
                        return(
                            <div>
                                <DataUsageCard/>
                            </div>
                        )
                    case 'Sms':
                        return(
                            <div>
                                <SmsUsageCard/>
                            </div>
                        )
                    case 'Voice':
                        return(
                            <div>
                                <VoiceUsageCard/>
                            </div>
                        );
                    default:
                        return null;
                }
            }
        });
        return items;

    }

    render() {
        const sliderItems = config.usageCards;
        const sliderComponents = this.getSliderComponents(sliderItems);

        return (
            <div>
                <UsageCategorySlider slides={sliderComponents}/>
                <CircularProgressbar percentage={10} />
            </div>
        );
    }
}

export default UsageCard;
