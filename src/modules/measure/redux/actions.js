export const listar = lista => {
    console.log('action listar')
    return {  
        type: 'LISTAR',
        lista,
    }
};