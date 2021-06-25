import axios from 'axios';

export const Service = axios.create({
  baseURL: 'https://valgusana-api.herokuapp.com/api/'
});

export class PessoaFisicaService {

  static getPeople() {
    return Service.get('/pessoa-fisica');
  }

  static async deletePerson(id) {
    return Service.delete(`/pessoa-fisica/${id}`);
  }

  static save(pessoaFisica) {
    return Service.post(`/pessoa-fisica`, { pessoaFisica });
  }
}

