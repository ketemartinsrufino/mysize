
import {actionTypes} from './actions';

const defaultItem = {
    id: '',
    key: '',
    description: '',
    unit: '',
    datacriacao: new Date().getTime(),
};

export const listElement = (state = [], action) => {
    if(action.type ===  actionTypes.SHOW_LIST) {
        return action.listElement;
    } else if (action.type === actionTypes.UPDATE_LIST) {
        return state.concat([action.item]);
    }
    return state;
};

export const elementItem = (state = defaultItem, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ITEM:
            return action.item;
        case actionTypes.UPDATE_LOCAL_ITEM:
            return action.item;
        case actionTypes.SAVE:
            return action.item;
        case actionTypes.DELETE:
            return {};
        case actionTypes.CLEAR_FORM:
            return defaultItem;
        default:
            return state;
    }
}