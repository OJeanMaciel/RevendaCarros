import React from 'react';
import '../css/body.css';
import img from '../img/cars/0.jpg';

class BodyHome extends React.Component {

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
        // <p><b><img src={`"../img/Cars/"${this.item.id}`} className="carroimg"/></b></p>
        render() {

            
            let recente = <p>Carregando...</p>
            
            if (this.state.carros) {
                recente = (<ul>
                {this.state.carros.map(item => (
                    <ul className='cards' key={item.id}>
                        <p><b><img src={img} className="carroimg"/></b></p>
                        <p><b>Marca:</b> {item.marca_nome}</p>
                        <p><b>Nome:</b> {item.nome_modelo}</p>
                        <p><b>Ano:</b> {item.ano}</p>
                        <p><b>Combustivel:</b> {item.combustivel}</p>
                        <p><b>Portas:</b> {item.num_portas}</p>
                        <p><b>Cor:</b> {item.cor}</p>
                        <p><b>Valor da Fipe:</b> {item.valor_fipe}</p>
                        <p><b>Cadastro:</b> {item.timestamp_cadastro}</p>
                    </ul>
                ))}
            </ul>)
        }
        
        let antigos = <p>Carregando...</p>
            
        if (this.state.carros) {
            antigos = (<ul>
            {this.state.carros.map(item => (
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
            ))}
        </ul>)
    }

    let promoções = <p>Carregando...</p>
    
    if (this.state.carros) {
        promoções = (<ul>
        {this.state.carros.map(item => (
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
        ))}
    </ul>)
    }
        
        return (
            <div className='lista'>
                <h1>Home Page!</h1>
                    <h3 className='subTitle'>Carros recém chegados</h3>
                <div className='section'>
                    {recente}
                </div>
                    <h3 className='subTitle'>Carros antigos</h3>
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