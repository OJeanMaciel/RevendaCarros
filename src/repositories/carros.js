import config from '../config';

const Carros = `${config.URL_BACKEND}/carros`;

function create(objetoDoCarro) {
  return fetch(`${Carros}?_embed=carros`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objetoDoCarro),
    })
    .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }
    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  create,
};