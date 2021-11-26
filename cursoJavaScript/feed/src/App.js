import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, username: 'Matheus', curtidas: 10, comentários: 2 },
                { id: 2, username: 'Lucas', curtidas: 120, comentários: 24 },
                { id: 3, username: 'Amanda', curtidas: 30, comentários: 12 },
            ]
        };
    }

    render() {
        return (
            <div>

                {this.state.feed.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.username}</h3>
                            <a>{item.curtidas} curtidas /
                                {item.comentários} comentários </a>
                        </div>
                    );
                })}

            </div>
        );
    }
}

export default App;
