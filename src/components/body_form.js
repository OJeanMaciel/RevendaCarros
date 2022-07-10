import React from 'react';
import '../css/form.css';

function BodyForm (){
        return (
            <div className={"container"}>
                <h1 className={"container_form_h1"}>Formulário!</h1>
                <p className={"container_form_p"}>Cadastre seu carro para venda!</p>
                <form className='form'>
                <div className='form_control'>
                    <label className='form_control_label'>Marca</label>
                    <input className='form_control_input' type='text' placeholder='Marca do carro'/>
                </div>
                <div className='form_control'>
                    <label className='form_control_label'>Modelo</label>
                    <input className='form_control_input' type='text' placeholder='Digite o modelo do carro'/>
                </div>
                <div className='form_control'>
                    <label className='form_control_label'>Ano</label>
                    <input className='form_control_input' type='number' placeholder='Digite o ano de fabricação'/>
                </div>
                <div className='form_control'>
                    <label className='form_control_label'>Combustivel</label>
                    <input className='form_control_input' type='text' placeholder='Digite o tipo de combustivel'/>
                </div>
                <div className='form_control'>
                    <label className='form_control_label'>Cor</label>
                    <input className='form_control_input' type='text' placeholder='Digite a cor do carro'/>
                </div>
                <div className='form_control'>
                    <label className='form_control_label'>Número de Portas</label>
                    <input className='form_control_input' type='number' placeholder='Digite o número de portas'/>
                </div>
                <div className='form_control'>
                    <label className='form_control_label'>Valor</label>
                    <input className='form_control_input' type='number' placeholder='Digite a tabela Fipe'/>
                </div>
                <div className='form_control'>
                    <button className='form_control_button'>
                        Casdastrar
                    </button>
                </div>
                </form>
            </div>
        );
    };

export default BodyForm;