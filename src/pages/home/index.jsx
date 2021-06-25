import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonOutlined from '../../components/buttons/buttonOutlined/buttonOutlined';
import ButtonPrimary from '../../components/buttons/buttonPrimary/buttonPrimary';
import { useStyles } from './styles';

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Grid container spacing={0}>
        <Grid item xs />
        <Grid item xs>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Link to='/Dancarinos'>
                <ButtonPrimary
                  text='Cadastro de Dançarinos'
                  style={{ width: '100%' }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Link to='/PessoasFisicas'>
                <ButtonPrimary
                  text='Cadastro de Pessoas Físicas'
                  style={{ width: '100%' }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Link to='/'>
                <ButtonOutlined text='Sair' style={{ width: '100%' }} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

export default Home;
