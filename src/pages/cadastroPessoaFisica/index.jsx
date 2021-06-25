import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonOutlined from '../../components/buttons/buttonOutlined/buttonOutlined';
import ButtonPrimary from '../../components/buttons/buttonPrimary/buttonPrimary';
import Field from '../../components/inputs';
import { PessoaFisicaService } from '../../services/api';
import { useStyles } from './styles';

function CadastroPessoaFisica() {
  const classes = useStyles();
  const history = useHistory();
  const [peopleSelect, setPeopleSelect] = useState([]);
  const onGoback = () => history.goBack();

  const pessoaFisicaInit = {
    nome: null,
    cpf: null,
    telefone: null,
    responsavelId: null,
    endereco: null,
    dataNascimento: null

  }
  const [pessoaFisica, setPessoaFisica] = useState({ ...pessoaFisicaInit });


  useEffect(() => {
    PessoaFisicaService.getPeople().then(({ data }) => {
      data = data.map((d) => ({ id: d.id, nome: d.nome }));
      setPeopleSelect([].concat(data));
    });
  }, []);


  function handlePessoaFisicaSave() {
    return PessoaFisicaService.save(pessoaFisica).then(() => {
      setPessoaFisica({
        nome: '',
        cpf: '',
        telefone: null,
        responsavelId: null,
        endereco: '',
        dataNascimento: ''
      });
    });
  }

  return (
    <div className={classes.content}>
      <Grid container spacing={0}>
        <Grid item xs />
        <Grid item xs>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <div className={classes.title}>Cadastro de pessoas</div>
            </Grid>
            <Grid item xs={12}>
              <Field type='text' label='Nome' value={pessoaFisica.nome} onChange={(event) => setPessoaFisica({ ...pessoaFisica, nome: event.target.value })} />
            </Grid>
            <Grid item xs={6}>
              <Field type='cpf' value={pessoaFisica.cpf} onChange={(event) => setPessoaFisica({ ...pessoaFisica, cpf: event.target.value })} />
            </Grid>
            <Grid item xs={6}>
              <Field type='telefone' label='Celular' value={pessoaFisica.telefone} onChange={(event) => setPessoaFisica({ ...pessoaFisica, telefone: event.target.value })} />
            </Grid>
            <Grid item xs={12}>
              <Field
                type='select'
                label='Responsável'
                name='Responsavel'
                colummName='nome'
                valueName='id'
                options={peopleSelect}
                onChange={(event) => setPessoaFisica({ ...pessoaFisica, responsavelId: event.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <Field type='text' label='Endereço' value={pessoaFisica.endereco} onChange={(event) => setPessoaFisica({ ...pessoaFisica, endereco: event.target.value })} />
            </Grid>
            <Grid item xs={6}>
              <Field type='date' label='Data de nascimento' value={pessoaFisica.dataNascimento} onChange={(event) => setPessoaFisica({ ...pessoaFisica, dataNascimento: event.target.value })} />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <ButtonOutlined
                text='Cancelar'
                style={{ marginRight: '10px' }}
                onClick={onGoback}
              />
              <ButtonPrimary text='Salvar' onClick={handlePessoaFisicaSave} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

export default CadastroPessoaFisica;
