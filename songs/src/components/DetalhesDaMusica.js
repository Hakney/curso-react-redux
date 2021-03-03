import React from 'react';
import {connect} from 'react-redux';

const DetalhesDaMusica = ({song}) => {
    console.log(song)
    if(!song){
        return <div>Selecione uma música</div>
    }
    return(
        <div>
            <h3>Detalhes para:</h3>
            <p>
                Título: {song.title} <br/>
                Duração: {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.musicaSelecionada}
}

export default connect(mapStateToProps)(DetalhesDaMusica);