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
    console.log('reducer listar. action: ', action);
    if(action.type ===  'successfull' ) {
        return action.payload;
    }
    return state;
};

export const item = (state = defaultItem, action) => {
    switch (action.type) {
        case 'EDIT':
            return action.payload;
        case 'UPDATE_IMC':
            return action.payload;
        case 'SAVE':
            return action.payload;
        case 'DELETE':
            return {};
        default:
            return state;
    }
}