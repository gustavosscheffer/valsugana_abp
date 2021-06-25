class VerifyMask {
  isCpf(strCPF) {
    var sum;
    var rest;
    sum = 0;
    if (strCPF === '00000000000') return false;

    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(strCPF.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  validaCNPJ(value) {
    if (!value) return false;

    // Aceita receber o valor como string, número ou array com todos os dígitos
    const validTypes =
      typeof value === 'string' ||
      Number.isInteger(value) ||
      Array.isArray(value);

    // Elimina valor em formato inválido
    if (!validTypes) return false;

    // Guarda um array com todos os dígitos do valor
    const match = value.toString().match(/\d/g);
    const numbers = Array.isArray(match) ? match.map(Number) : [];

    // Valida a quantidade de dígitos
    if (numbers.length !== 14) return false;

    // Elimina inválidos com todos os dígitos iguais
    const items = [...new Set(numbers)];
    if (items.length === 1) return false;

    // Cálculo validador
    const calc = (x) => {
      const slice = numbers.slice(0, x);
      let factor = x - 7;
      let sum = 0;

      for (let i = x; i >= 1; i--) {
        const n = slice[x - i];
        sum += n * factor--;
        if (factor < 2) factor = 9;
      }

      const result = 11 - (sum % 11);

      return result > 9 ? 0 : result;
    };

    // Separa os 2 últimos dígitos de verificadores
    const digits = numbers.slice(12);

    // Valida 1o. dígito verificador
    const digit0 = calc(12);
    if (digit0 !== digits[0]) return false;

    // Valida 2o. dígito verificador
    const digit1 = calc(13);
    return digit1 === digits[1];
  }

  async deskMask(e, name) {
    switch (name) {
      case 'cpf':
        let cpf = e.target.value;
        cpf = cpf.replaceAll('.', '');
        cpf = cpf.replaceAll('-', '');
        cpf = cpf.replaceAll('_', '');
        return cpf;
      case 'telephone':
        let telephone = e.target.value;
        telephone = telephone.replaceAll('(', '');
        telephone = telephone.replaceAll(')', '');
        telephone = telephone.replaceAll('-', '');
        telephone = telephone.replaceAll(' ', '');
        return telephone;
      case 'cellphone':
        let cellphone = e.target.value;
        cellphone = cellphone.replaceAll('(', '');
        cellphone = cellphone.replaceAll(')', '');
        cellphone = cellphone.replaceAll('-', '');
        cellphone = cellphone.replaceAll(' ', '');
        return cellphone;
      case 'cnpj':
        let cnpj = e.target.value;
        cnpj = cnpj.replaceAll('.', '');
        cnpj = cnpj.replaceAll('/', '');
        cnpj = cnpj.replaceAll('-', '');
        cnpj = cnpj.replaceAll(' ', '');
        return cnpj;
      case 'celular':
        let celular = e.target.value;
        celular = celular.replaceAll('(', '');
        celular = celular.replaceAll(')', '');
        celular = celular.replaceAll('-', '');
        celular = celular.replaceAll(' ', '');
        return celular;
      case 'telefone':
        let telefone = e.target.value;
        telefone = telefone.replaceAll('(', '');
        telefone = telefone.replaceAll(')', '');
        telefone = telefone.replaceAll('-', '');
        telefone = telefone.replaceAll(' ', '');
        return telefone;
      case 'cep':
        let cep = e.target.value;
        cep = cep.replaceAll('-', '');
        cep = cep.replaceAll('_', '');
        cep = cep.trim();
        return cep;
      case 'hour':
        let hour = e.target.value;
        hour = hour.replaceAll(':', '');
        hour = hour.trim();
        return hour;
      default:
        break;
    }
  }
}

export const maskService = new VerifyMask();
