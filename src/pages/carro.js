import React from 'react';
import { useNavigate  } from 'react-router-dom';
import Headers from '../components/headers';
import useForm from '../hooks/useForm';
import FormField from '../components/FormField';
import Button from '../components/button';
import carrosRepository from '../repositories/carros';
import Footer from '../components/footer';
import '../css/form.css';

function Carro(){
    const navigate = useNavigate ('/');
    const date = new Date().toLocaleString();
    
    const { handleChange, values } = useForm({
      marca_nome: 'Chevrolet',
      nome_modelo: 'Celta',
      ano: 2002,
      combustivel: 'Flex',
      num_portas: 4,
      valor_fipe: 12,
      cor: 'Azul',
      timestamp_cadastro: 1836636350,
      id: 18,
      marca_id: 1,
    });

      return (
        <div>
            <Headers />

          <h1 className='container_form_h1'>Cadastre seu veículo</h1>

          <form onSubmit={(event) => {
            event.preventDefault();
            alert('Carro Cadastrado com Sucesso!');
  
            carrosRepository.create({
              marca_nome: values.marca_nome,
              nome_modelo: values.nome_modelo,
              ano: values.ano,
              combustivel: values.combustivel,
              num_portas: values.num_portas,
              valor_fipe: values.valor_fipe,
              cor: values.cor,
              timestamp_cadastro: values.date,
            })
              .then(() => {
                console.log('Cadastrou com Sucesso!');             
                navigate.push('/');
              });
          }}
          >
          <FormField
            label="Marca do veículo"
            name="marca_nome"
            value={values.marca_nome}
            onChange={handleChange}
           />
  
          <FormField
            label="Nome do modelo"
            name="nome_modelo"
            value={values.nome_modelo}
            onChange={handleChange}
          />
  
          <FormField
            label="Ano de Fabricação"
            name="ano"
            value={values.ano}
            onChange={handleChange}
          />
  
          <FormField
            label="Tipo de combustivel"
            name="combustivel"
            value={values.combustivel}
            onChange={handleChange}
          />
  
          <FormField
            label="Quantidade de portas"
            name="num_portas"
            value={values.num_portas}
            onChange={handleChange}
          />
  
          <FormField
            label="Valor da Fipe"
            name="valor_fipe"
            value={values.valor_fipe}
            onChange={handleChange}
          />
  
          <FormField
            label="Cor do veículo"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <h1 className='container_form_h1'>
            <Button className='form_control_button' type="submit">
              Cadastrar
            </Button>
          </h1>
          </form>
          <Footer />
         </div>
      );
    }
  
export default Carro;