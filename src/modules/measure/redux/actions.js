
export const actionTypes = {
    LOAD_LIST: 'LOAD_LIST',
    SHOW_LIST: 'SHOW_LIST',
    LOAD_ITEM: 'LOAD_ITEM',
    SHOW_ITEM: 'SHOW_ITEM',
    SAVE: 'SAVE',
    DELETE: 'DELETE',
    UPDATE_LIST: 'UPDATE_LIST',
    CLEAR_FORM: 'CLEAR_FORM',

}

export const loadItems = () => {
    return {  
        type: actionTypes.LOAD_LIST,
    }
};
export const showList = lista => ({  
    type: actionTypes.SHOW_LIST,
    lista,
});
export const loadItem = (id) => {
    // console.log('--- key:', key);
    return {
    type: actionTypes.LOAD_ITEM,
    id
}};
export const showItem = (item) => ({
    type: actionTypes.SHOW_ITEM,
    item
});

export const saveItem = (item) => ({  
    type: actionTypes.SAVE,
    item
});

export const updateList = (item) => ({  
    type: actionTypes.UPDATE_LIST,
    item
});

export const deleteItem = (id) => ({  
    type: actionTypes.DELETE,
    id
});

export const clearForm = () => ({  
    type: actionTypes.CLEAR_FORM
});