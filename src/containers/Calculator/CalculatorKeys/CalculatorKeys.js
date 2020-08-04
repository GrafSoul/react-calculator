import React from 'react';

import classes from './CalculatorKeys.module.css';
import CalculatorKey from './CalculatorKey/CalculatorKey';

const CalculatorKeys = (props) => {
    const displayValue = props.displayValue;
    const clearDisplay = displayValue !== '0';
    const clearText = clearDisplay ? 'C' : 'AC';

    return (
        <div>
            <div className={classes.InputKeypad}>
                <div className={classes.Operators}>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.inputSqr()}
                    >
                        х²
                    </CalculatorKey>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.inputSqrt()}
                    >
                        √
                    </CalculatorKey>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.inputSin()}
                    >
                        sin ̥
                    </CalculatorKey>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.inputCos()}
                    >
                        cos ̥
                    </CalculatorKey>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.inputTan()}
                    >
                        tan ̥
                    </CalculatorKey>
                </div>

                <div className={classes.InputKeys}>
                    <div className={classes.Func}>
                        <CalculatorKey
                            className={
                                classes.ButtonKey + ' ' + classes.ButtonFunc
                            }
                            onPress={() =>
                                clearDisplay
                                    ? props.clearDisplay()
                                    : props.clearAll()
                            }
                        >
                            {clearText}
                        </CalculatorKey>
                        <CalculatorKey
                            className={
                                classes.ButtonKey + ' ' + classes.ButtonFunc
                            }
                            onPress={() => props.toggleSign()}
                        >
                            ±
                        </CalculatorKey>
                        <CalculatorKey
                            className={
                                classes.ButtonKey + ' ' + classes.ButtonFunc
                            }
                            onPress={() => props.inputPercent()}
                        >
                            %
                        </CalculatorKey>
                    </div>

                    <div className={classes.Digits}>
                        <CalculatorKey
                            className={
                                classes.ButtonKey + ' ' + classes.ButtonZero
                            }
                            onPress={() => props.inputDigit(0)}
                        >
                            0
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDot()}
                        >
                            .
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDigit(1)}
                        >
                            1
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDigit(2)}
                        >
                            2
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDigit(3)}
                        >
                            3
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDigit(4)}
                        >
                            4
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDigit(5)}
                        >
                            5
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDigit(6)}
                        >
                            6
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDigit(7)}
                        >
                            7
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDigit(8)}
                        >
                            8
                        </CalculatorKey>
                        <CalculatorKey
                            className={classes.ButtonKey}
                            onPress={() => props.inputDigit(9)}
                        >
                            9
                        </CalculatorKey>
                    </div>
                </div>

                <div className={classes.Operators}>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.performOperation('/')}
                    >
                        ÷
                    </CalculatorKey>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.performOperation('*')}
                    >
                        ×
                    </CalculatorKey>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.performOperation('-')}
                    >
                        −
                    </CalculatorKey>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.performOperation('+')}
                    >
                        +
                    </CalculatorKey>
                    <CalculatorKey
                        className={
                            classes.ButtonKey + ' ' + classes.ButtonOperators
                        }
                        onPress={() => props.performOperation('=')}
                    >
                        =
                    </CalculatorKey>
                </div>
            </div>
        </div>
    );
};

export default CalculatorKeys;
