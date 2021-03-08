// action creator
export const selecionarMusica = (song) => {
    // retorna uma action
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};