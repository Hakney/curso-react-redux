import {combineReducers} from 'redux';

const musicasReducer = () => {
    return [
        {title: 'Música 1', duration: '4:05'},
        {title: 'Música 2', duration: '2:30'},
        {title: 'Música 3', duration: '3:25'},
        {title: 'Música 4', duration: '3:15'},
    ];
};

const musicaSelecionadaReducer = (musicaSelecionada = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return musicaSelecionada;
};

export default combineReducers({
    musicas: musicasReducer,
    musicaSelecionada: musicaSelecionadaReducer
})