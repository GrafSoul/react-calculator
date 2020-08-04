import React, { Component } from 'react';

import classes from './CalculatorDisplay.module.css';
import CalculatorScalingDigits from './CalculatorScalingDigits/CalculatorScalingDigits';

class CalculatorDisplay extends Component {
    render() {
        const { value, ...props } = this.props;

        const language = navigator.language || 'en-US';

        let formattedValue = parseFloat(value).toLocaleString(language, {
            useGrouping: true,
            maximumFractionDigits: 6,
        });

        const set = value.match(/\.\d*?(0*)$/);

        if (set) formattedValue += /[1-9]/.test(set[0]) ? set[1] : set[0];

        return (
            <div {...props} className={classes.CalculatorDisplay}>
                <CalculatorScalingDigits>
                    {formattedValue}
                </CalculatorScalingDigits>
            </div>
        );
    }
}

export default CalculatorDisplay;
