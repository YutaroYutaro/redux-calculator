import * as actionTypes from '../Utils/actionTypes';

export const onNumClick = (number) => ({
    type: actionTypes.INPUT_NUMBER,
    number,
});

export const onPlusClick = () => ({
    type: actionTypes.PLUS,
});