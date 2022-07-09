import React from 'react';
import '../css/body.css';
import img from '../img/cars/0.jpg';

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
            
            if (this.state.carros) {
                marcas = (<ul>
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
                ))};
            </ul>)
        }
        
        return (
            <div className='lista'>
                <h1>Encontre aqui as melhores marcas!</h1>
                {marcas}
            </div>
        );
    }
}

export default BodyApp;