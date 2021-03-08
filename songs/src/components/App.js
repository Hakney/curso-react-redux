import React from 'react';
import ListaDeMusicas from './ListaDeMusicas';
import DetalhesDaMusica from './DetalhesDaMusica';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <ListaDeMusicas/>
                </div>
                <div className="column eight wide">
                    <DetalhesDaMusica/>
                </div>
            </div>
        </div>
    );
}

export default App;