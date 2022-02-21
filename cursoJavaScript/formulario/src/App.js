import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.states = { //função de armazenar
            email: 'teste@teste.com',
            senha: '123456789'
        }

        this.trocaEmail = this.trocaEmail.bind(this);
    }

    trocaEmail(e) {
        let valorDigitado = e.target.value;
        this.setState({ email: valorDigitado });
    }



    render() {
        return (
            <div>
                <h2>Login</h2>
                Email:
                <input type="email" name="email" value={this.state.email}
                    onChange={this.trocaEmail} /> <br />
                Senha:
                <input type="password" name="senha" value={this.state.senha} />
            </div>
        );
    }
}

export default App;