export const listar = lista => {
    console.log('action listar', lista)
    return {  
        type: 'LISTAR',
        lista,
    }
};

export const getItems = () => {
    console.log('action getItems')
    return {  
        type: 'LOAD',
    }
};