import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListaDeMusicas extends Component {
    render(){
        return(
            <div>Lista de Músicas</div>
        );
    }
}


export default connect()(ListaDeMusicas);