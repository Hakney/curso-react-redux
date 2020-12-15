import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 8vhzk7MP0ed65Plk7Xvr9LbHloMqtQnEW10jcQwsEH4' 
            }
        });
    }
    
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar pesquisar={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;