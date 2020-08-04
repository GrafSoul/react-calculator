import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Calculator.module.css';

import * as actionCreators from '../../store/actions/index';

import CalculatorDisplay from './CalculatorDisplay/CalculatorDisplay';
import CalculatorKeys from './CalculatorKeys/CalculatorKeys';
import CalculatorInfo from './CalculatorInfo/CalculatorInfo';

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

class Calculator extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        let { key } = event;
        event.preventDefault();

        if (key === 'Enter') key = '=';

        if (/\d/.test(key)) {
            this.props.inputDigit(parseInt(key, 10));
        } else if (key in this.props.calculatorOperations) {
            this.props.performOperation(key);
        } else if (key === '.') {
            this.props.inputDot();
        } else if (key === '`') {
            this.props.toggleSign();
        } else if (key === '%') {
            this.props.inputPercent();
        } else if (key === 'q') {
            this.props.inputSqr();
        } else if (key === 'w') {
            this.props.inputSqrt();
        } else if (key === 'e') {
            this.props.inputSin();
        } else if (key === 'r') {
            this.props.inputCos();
        } else if (key === 't') {
            this.props.inputTan();
        } else if (key === 'Backspace') {
            this.props.clearLastChar();
        } else if (key === 'c') {
            if (this.props.displayValue !== '0') {
                this.props.clearDisplay();
            } else {
                this.props.clearAll();
            }
        }
    };

    render() {
        return (
            <div className={classes.CalculatorContent}>
                <div className={classes.CalculatorWrapper}>
                    <div className={classes.Calculator}>
                        <CalculatorDisplay value={this.props.displayValue} />

                        <CalculatorKeys
                            displayValue={this.props.displayValue}
                            clearDisplay={this.props.clearDisplay}
                            clearAll={this.props.clearAll}
                            toggleSign={this.props.toggleSign}
                            inputPercent={this.props.inputPercent}
                            inputSqr={this.props.inputSqr}
                            inputSqrt={this.props.inputSqrt}
                            inputSin={this.props.inputSin}
                            inputCos={this.props.inputCos}
                            inputTan={this.props.inputTan}
                            inputDot={this.props.inputDot}
                            inputDigit={this.props.inputDigit}
                            performOperation={this.props.performOperation}
                        />
                    </div>
                </div>

                <CalculatorInfo />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.calculator.value,
        displayValue: state.calculator.displayValue,
        operator: state.calculator.operator,
        waitingForOperand: state.calculator.waitingForOperand,
        calculatorOperations: state.calculator.calculatorOperations,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearAll: () => dispatch(actionCreators.clearAll()),
        clearDisplay: () => dispatch(actionCreators.clearDisplay()),
        clearLastChar: () => dispatch(actionCreators.clearLastChar()),
        toggleSign: () => dispatch(actionCreators.toggleSign()),
        inputPercent: () => dispatch(actionCreators.inputPercent()),

        inputSqr: () => dispatch(actionCreators.inputSqr()),
        inputSqrt: () => dispatch(actionCreators.inputSqrt()),
        inputSin: () => dispatch(actionCreators.inputSin()),
        inputCos: () => dispatch(actionCreators.inputCos()),
        inputTan: () => dispatch(actionCreators.inputTan()),

        inputDot: () => dispatch(actionCreators.inputDot()),
        inputDigit: (digit) => dispatch(actionCreators.inputDigit(digit)),
        performOperation: (operator) =>
            dispatch(actionCreators.performOperation(operator)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
