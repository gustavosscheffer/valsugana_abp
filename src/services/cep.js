import api from './api';
import { maskService } from './verifyMask';

class CepService {
  async findCep(event, setLoading, loading) {
    let cep = await maskService.deskMask(event, event.target.name);
    let completeAddress = await this.findAddress(cep);

    if (cep.length === 8) {
      // setLoading(true);
    }

    if (completeAddress) {
      if (completeAddress && !completeAddress.hasOwnProperty('erro')) {
        // setLoading(false);
        return completeAddress;
      } else {
        return null;
      }
    } else if (loading) {
      // setLoading(false);
    }
  }

  async findAddress(cep) {
    let cepVerify = await this.validateCep(cep);

    if (cepVerify === true) {
      try {
        let address = await api.get(`api/externalApi/findCep/${cep}`);
        return address.data;
      } catch (err) {
        return err;
      }
    } else {
      return null;
    }
  }

  async validateCep(cep) {
    return this.validateQuantityChar(cep, 8, 'o CEP');
  }

  async validateQuantityChar(value, quantity, name) {
    if (value.length === quantity) {
      return true;
    } else {
      return `Preencha ${name}`;
    }
  }
}

export const cepService = new CepService();
