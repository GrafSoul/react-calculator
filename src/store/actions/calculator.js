import * as actionTypes from './actionTypes';

export const clearAll = () => {
    return {
        type: actionTypes.CALC_CLEAR_ALL,
    };
};

export const clearDisplay = () => {
    return {
        type: actionTypes.CALC_CLEAR_DISPLAY,
    };
};

export const clearLastChar = () => {
    return {
        type: actionTypes.CALC_CLEAR_LAST_CHAR,
    };
};

export const toggleSign = () => {
    return {
        type: actionTypes.CALC_TOGGLE_SIGN,
    };
};

export const inputPercent = () => {
    return {
        type: actionTypes.CALC_INPUT_PERCENT,
    };
};

export const inputSqr = () => {
    return {
        type: actionTypes.CALC_INPUT_SQR,
    };
};

export const inputSqrt = () => {
    return {
        type: actionTypes.CALC_INPUT_SQRT,
    };
};

export const inputSin = () => {
    return {
        type: actionTypes.CALC_INPUT_SIN,
    };
};

export const inputCos = () => {
    return {
        type: actionTypes.CALC_INPUT_COS,
    };
};

export const inputTan = () => {
    return {
        type: actionTypes.CALC_INPUT_TAN,
    };
};

export const inputDot = () => {
    return {
        type: actionTypes.CALC_INPUT_DOT,
    };
};

export const inputDigit = (digit) => {
    return {
        type: actionTypes.CALC_INPUT_DIGIT,
        digit: digit,
    };
};

export const performOperation = (operator) => {
    return {
        type: actionTypes.CALC_PERFORM_OPERATION,
        operator: operator,
    };
};
