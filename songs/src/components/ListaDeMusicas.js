import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selecionarMusica} from '../actions/'
class ListaDeMusicas extends Component {
    renderizarLista(){
        return this.props.musicas.map((musica) => {
            return (
                <div className="item" key={musica.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selecionarMusica(musica)}>
                            Selecionar
                        </button>
                    </div>

                    <div className="content">{musica.title}</div>
                </div>
            )
        })
    }
    
    
    
    render(){
        return(
            <div className="ui divided list">{this.renderizarLista()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        musicas: state.musicas,
        musicaSelecionada: state.musicaSelecionada
    };
}

export default connect(mapStateToProps, {selecionarMusica})(ListaDeMusicas);