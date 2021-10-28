import React, { Component } from 'react';
import Membro from './component/membro';

class App extends Component {
    render() {
        return (
            <div>
                <Membro nome="Visitante" />
            </div>
        );
    }
}

export default App;