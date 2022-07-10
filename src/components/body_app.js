import React from 'react';
import '../css/body.css';
import img from '../img/cars/0.jpg';
import LogoMarcas from '../img/Marcas.png';

class BodyApp extends React.Component {
    
    
    state = {
        carros: []
    };
    
    componentDidMount() {
        fetch('https://jkflix.herokuapp.com/carros')
        .then(res => res.json())
        .then(res => {
            this.setState({
                carros: res,
            });
        });
    }
    
    render() {

            let marcas = <p>Carregando...</p>

            marcas = [].concat(this.state.carros)
            .sort((a, b) => a.marca_nome > b.marca_nome ? 1 : -1)
            .map((item, i) => 
                <div key={i}> 
                <ul className='cards' key={item.id}>
                <p><b><img src={img} className="carroimg"/></b></p>
                <p><b>Marca:</b> {item.marca_nome}</p>
                <p><b>Nome:</b> {item.nome_modelo}</p>
                <p><b>Ano:</b> {item.ano}</p>
                <p><b>Combustivel:</b> {item.combustivel}</p>
                <p><b>Portas:</b> {item.num_portas}</p>
                <p><b>Cor:</b> {item.cor}</p>
                <p><b>Valor da Fipe:</b> {item.valor_fipe}</p>
                </ul>
                </div>
            );
        return (
            <div className='lista'>
                <h1>Encontre as melhores marcas!</h1>
                <img src={LogoMarcas}></img>
                    <div className='section'>
                        {marcas} 
                    </div>
            </div>
        );
    }
}

export default BodyApp;