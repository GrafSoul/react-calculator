import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	value: null,
	displayValue: '0',
	operator: null,
	waitingForOperand: false,
	calculatorOperations: {
		'/': (prev, next) => prev / next,
		'*': (prev, next) => prev * next,
		'+': (prev, next) => prev + next,
		'-': (prev, next) => prev - next,
		'=': (prev, next) => next
	}
};

const reducer = ( state = initialState, action ) => {

	const {	value, displayValue, operator, waitingForOperand, calculatorOperations} = state;
	const currentValue = parseFloat(displayValue);
	const insertZero = () => {if (currentValue === 0) return updateObject(state, {displayValue: '0'});};

	switch ( action.type ) {

		case actionTypes.CALC_CLEAR_ALL:
			return updateObject(state,
				{value: null, displayValue: '0', operator: null, waitingForOperand: false});

		case actionTypes.CALC_CLEAR_DISPLAY:
			return updateObject(state, {displayValue: '0'});

		case actionTypes.CALC_CLEAR_LAST_CHAR:
			return updateObject(state,
				{displayValue: displayValue.substring( 0, displayValue.length - 1 ) || '0'});

		case actionTypes.CALC_TOGGLE_SIGN:
			const toggleNewValue = parseFloat(displayValue) * -1;
			return updateObject(state, {displayValue: String(toggleNewValue)});

		case actionTypes.CALC_INPUT_PERCENT:
			insertZero();
			const fixedDigitsPercent = displayValue.replace(/^-?\d*\.?/, '');
			const percentNewValuePercent = parseFloat(displayValue) / 100;
			return updateObject(state,
				{displayValue: String(percentNewValuePercent.toFixed(fixedDigitsPercent.length + 2))});

		case actionTypes.CALC_INPUT_SQR:
			insertZero();
			const sqrNewValue = Math.pow(currentValue,2);
			return updateObject(state, {displayValue: String(sqrNewValue)});

		case actionTypes.CALC_INPUT_SQRT:
			insertZero();
			const sqrtNewValue = Math.sqrt(currentValue);
			return updateObject(state, {displayValue: String(sqrtNewValue)});

		case actionTypes.CALC_INPUT_SIN:
			insertZero();
			const sinNewValue = Math.sin(currentValue * Math.PI/180);
			return updateObject(state, {displayValue: String(sinNewValue)});

		case actionTypes.CALC_INPUT_COS:
			insertZero();
			const cosNewValue = Math.cos(currentValue * Math.PI/180);
			return updateObject(state, {displayValue: String(cosNewValue)});

		case actionTypes.CALC_INPUT_TAN:
			insertZero();
			const tanNewValue = Math.tan(currentValue * Math.PI/180);
			return updateObject(state, {displayValue: String(tanNewValue)});

		case actionTypes.CALC_INPUT_DOT:
			let addPoint = (!(/\./).test(displayValue)) ?
				{displayValue: displayValue + '.', waitingForOperand: false } : null;
			return updateObject(state, addPoint);

		case actionTypes.CALC_INPUT_DIGIT:
			if (waitingForOperand) {
				return updateObject(state,
					{displayValue: String(action.digit),	waitingForOperand: false});
			} else {
				return updateObject(state, {displayValue: displayValue === '0' ?
						String(action.digit) : displayValue + action.digit});
			}

		case actionTypes.CALC_PERFORM_OPERATION:
			let inputValue = parseFloat(displayValue);
			if (value === null) {
				return updateObject(state,
					{value: inputValue, waitingForOperand: true, operator: action.operator});
			} else if (operator) {
				const currentValue = value || 0;
				const newValue = calculatorOperations[operator](currentValue, inputValue);
				return updateObject(state,
					{value: newValue, displayValue: String(newValue), waitingForOperand: true, operator: action.operator});
			}
			return;

		default:
			return state;
	}
};

export default reducer;
