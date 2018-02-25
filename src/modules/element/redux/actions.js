
export const actionTypes = {
    LOAD_LIST: 'LOAD_ELEMENT_LIST',
    SHOW_LIST: 'SHOW_ELEMENT_LIST',
    LOAD_ITEM: 'LOAD_ELEMENT_ITEM',
    SHOW_ITEM: 'SHOW_ELEMENT_ITEM',
    SAVE: 'SAVE_ELEMENT',
    DELETE: 'DELETE_ELEMENT',
    UPDATE_LIST: 'UPDATE_LIST_ELEMENT',
    UPDATE_LOCAL_ITEM: 'UPDATE_LOCAL_ELEMENT_ITEM',
    CLEAR_FORM: 'CLEAR_FORM_ELEMENT',
}
export const loadElements = () => {
    return {  
        type: actionTypes.LOAD_LIST,
    }
};
export const showListElements = listElement => {
    console.log('showListElements', listElement);
    return {  
    type: actionTypes.SHOW_LIST,
    listElement,
}};
export const loadItem = (key) => ({
    type: actionTypes.LOAD_ITEM,
    key
});
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

export const deleteItem = (key) => ({  
    type: actionTypes.DELETE,
    key
});

export const updateLocalItem = (item) => ({  
    type: actionTypes.UPDATE_LOCAL_ITEM,
    item
});

export const clearForm = () => ({  
    type: actionTypes.CLEAR_FORM
});