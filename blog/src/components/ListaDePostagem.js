import React from 'react';
import { connect } from 'react-redux';
import { buscarPostagens } from '../actions';

class ListaDePostagem extends React.Component{
    componentDidMount(){
        this.props.buscarPostagens();
    }

    render(){
        return(
            <div> Post List </div>
        );
    }
}

// const mapStateToProps = (state) => {
// }

export default connect(null, {buscarPostagens})(ListaDePostagem);