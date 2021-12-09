import React from "react";

class Home extends React.Component {

    state = {
        nomeServidor: ''
    }
    
    componentDidMount(){
        const servidorStorage = localStorage.getItem('servidor_logado')
        const servidorLogado = JSON.parse(servidorStorage)
        this.setState({nomeServidor: servidorLogado.nome})
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="lead display-6">Bem Vindo ao Sistema de Ordens de Serviço</h1>                
                <hr className="my-4" />
                <p /*className="display-5"*/>{this.state.nomeServidor}</p>
                <p>Acesse ao sistema nos botões abaixo:</p>
                <p className="lead">
                    <a className="btn btn-danger btn-lg"
                        href="#/cadastro-servidor"
                        role="button" style={{marginRight: '4px'}}>
                        <i className="fa fa-users"></i>
                            Cadastrar Servidor
                    </a>
                    <a className="btn btn-secondary btn-lg"
                        href="#/consultar-servicos"
                        role="button">
                        <i className="fa fa-users"></i>
                            Cadastrar Lançamento
                    </a>
                </p>
            </div>  
        );
    }
}

export default Home;