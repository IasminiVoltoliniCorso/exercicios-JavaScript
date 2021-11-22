import React from "react";

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome}
                cargo={props.cargo}
                idade={props.idade} />
            <Social fb={props.facebook}
                lk={props.linkedIn}
                yt={props.youtube} />
            <hr />
        </div>
    );
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
        </div>
    );
}

const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook/ </a>
            <a href={props.lk}>LinkedIn/</a>
            <a href={props.yt} target='_blank'>Youtube</a>
        </div>
    )
}
function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Lucas" cargo="Programador(a)" idade="29"
                facebook="https://google.com" />
            <Equipe nome="Matheus" cargo="Designer" idade="35"
                linkedIn="https://google.com" />
            <Equipe nome="Amanda" cargo="Testador(a)" idade="23"
                youtube="https://google.com" />
        </div>
    );
}

export default App;* /