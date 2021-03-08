import jsonplaceholder from '../apis/jsonPlaceholder'

export const buscarPostagens = () => async (dispatch)  => {
    const response = await jsonplaceholder.get('/posts');
    
    dispatch({type: 'BUSCAR_POSTAGEM', payload: response})
};