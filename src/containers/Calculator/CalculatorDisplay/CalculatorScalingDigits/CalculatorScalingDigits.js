import React, { Component } from 'react';

import classes from './CalculatorScalingDigits.module.css';

class CalculatorScalingDigits extends Component {
    state = { scale: 1 };

    componentDidUpdate() {
        const { scale } = this.state;

        const node = this.node;
        const parentNode = node.parentNode;

        const availableWidth = parentNode.offsetWidth;
        const actualWidth = node.offsetWidth;
        const actualScale = availableWidth / actualWidth;

        if (scale === actualScale) return;

        if (actualScale < 1) {
            this.setState({ scale: actualScale });
        } else if (scale < 1) {
            this.setState({ scale: 1 });
        }
    }

    render() {
        const { scale } = this.state;

        return (
            <div
                className={classes.ScalingDigits}
                style={{ transform: `scale(${scale},${scale})` }}
                ref={(node) => (this.node = node)}
            >
                {this.props.children}
            </div>
        );
    }
}

export default CalculatorScalingDigits;
