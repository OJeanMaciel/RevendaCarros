import React from 'react';
import '../css/form.css';
import Headers from '../components/headers';
import carrosRepository from '../repositories/carros';
import Button from '../components/button';
import FormField from '../components/FormField';
import useForm from '../hooks/useForm';
import { useNavigate  } from 'react-router-dom';

function Form(){
    const navigate = useNavigate ();    
    const { handleChange, values } = useForm({
    });
      return (
        <div>
            <Headers />

          <h1>Cadastro de carros</h1>
  
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
              timestamp_cadastro: values.timestamp_cadastro,
              id: 1,
              marca_id: 1,
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
  
          <FormField
            label="Dia do cadastro"
            name="timestamp_cadastro"
            value={values.timestamp_cadastro}
            onChange={handleChange}
          />
  
          <Button type="submit">
            Cadastrar
          </Button>
  
  
          </form>
            </div>
      );
    }
  
export default Form;