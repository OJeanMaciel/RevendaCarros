import React from 'react';
import '../css/body.css';
import img from '../img/cars/0.jpg';
import LogoMarcas from '../img/Marcas.png';

class BodyHome extends React.Component {

        state = {
            carros: []
        };
    
    //https://wswork.com.br/cars.json - Quando tento usar a API de vocês dá erro de CORS. Subi para o Heroku o JSON
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
            
        let recente = <p>Carregando...</p>
            
        recente = [].concat(this.state.carros)
        .sort((a, b) => a.timestamp_cadastro > b.timestamp_cadastro ? 1 : -1)
        .slice(0,5)
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

        let antigos = <p>Carregando...</p>

            antigos = [].concat(this.state.carros)
                .sort((a, b) => a.ano > b.ano ? 1 : -1)
                .filter(antigos => antigos.ano <= 2005)
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

        let promoções = <p>Carregando...</p>
              
            promoções = [].concat(this.state.carros)
            .sort((a, b) => a.valor_fipe > b.valor_fipe ? 1 : -1)
            .slice(0,3)
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
                <img src={LogoMarcas}></img>
                    <h3 className='subTitle'>Novos Carros em estoque</h3>
                <div className='section'>
                    {recente}
                </div>
                    <h3 className='subTitle'>Carros abaixo de 2005</h3>
                <div className='section'>
                    {antigos}
                </div>
                    <h3 className='subTitle'>Aproveite as promoções!</h3>
                <div className='section'>
                    {promoções}
                </div>
            </div>
        );
    }
}

export default BodyHome;