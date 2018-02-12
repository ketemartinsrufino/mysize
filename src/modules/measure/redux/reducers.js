import {actionTypes} from './actions';

const defaultItem = {
    key: '',
    datacriacao: new Date().getTime(),
    peso: '',
    altura: '',
    cintura: '',
    abdomen: '',
    quadril: '',
    imc: '',
};

export const lista = (state = [], action) => {
    // console.log('reducer listar. action: ', action.lista);
    if(action.type ===  actionTypes.SHOW_LIST) {
        return action.lista;
    } else if (action.type === actionTypes.UPDATE_LIST) {
        return state.concat([action.item]);
    }
    return state;
};

export const item = (state = defaultItem, action) => {
    // console.log('reducer item. action: ', action);
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