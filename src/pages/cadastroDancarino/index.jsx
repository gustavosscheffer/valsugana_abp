import { Grid } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonOutlined from '../../components/buttons/buttonOutlined/buttonOutlined';
import ButtonPrimary from '../../components/buttons/buttonPrimary/buttonPrimary';
import Field from '../../components/inputs';
import { useStyles } from './styles';

function CadastroDancarino() {
  const classes = useStyles();
  const history = useHistory();
  const onGoback = () => history.goBack();
  return (
    <div className={classes.content}>
      <Grid container spacing={0}>
        <Grid item xs />
        <Grid item xs>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <div className={classes.title}>Cadastro de Dançarinos</div>
            </Grid>
            <Grid item xs={8}>
              <Field type='text' label='Nome' />
            </Grid>
            <Grid item xs={4}>
              <Field type='number' label='Idade' />
            </Grid>
            <Grid item xs={6}>
              <Field type='cpf' />
            </Grid>
            <Grid item xs={6}>
              <Field type='telefone' label='Celular' />
            </Grid>
            <Grid item xs={6}>
              <Field type='cep' />
            </Grid>
            <Grid item xs={6}>
              <Field type='text' label='Endereço' />
            </Grid>
            <Grid item xs={6}>
              <Field type='text' label='Bairro' />
            </Grid>
            <Grid item xs={6}>
              <Field type='text' label='Cidade' />
            </Grid>
            <Grid item xs={6}>
              <Field type='date' label='Data de entrada' />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <ButtonOutlined text='Cancelar' style={{ marginRight: '10px' }} onClick={onGoback}/>
              <ButtonPrimary text='Salvar' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

export default CadastroDancarino;
