import React from 'react';
import PointTarget from 'react-point';
import { Button } from 'react-materialize';

class CalculatorKey extends React.Component {
    render() {
        const { onPress, ...props } = this.props;

        return (
            <PointTarget onPoint={onPress}>
                <Button {...props} />
            </PointTarget>
        );
    }
}

export default CalculatorKey;
