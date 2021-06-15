import React from 'react';
import Field from '../../components/inputs'
import { useStyles } from './styles';
import { Grid } from '@material-ui/core'
import ButtonPrimary from '../../components/buttons/buttonPrimary/buttonPrimary';
import LogoValsugana from '../../components/logo'

function Login() {
  const classes = useStyles()
  return (
    <div className={classes.content}>
      <Grid container spacing={0}>
        <Grid item xs/>
        <Grid item xs>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{textAlign:"center"}}>
              <LogoValsugana height="140px" width="140px" />
            </Grid>
            <Grid item xs={12}>
              <Field type="text" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <Field type="password" label="Senha" />
            </Grid>
            <Grid item xs={12} style={{textAlign:"center"}}>
              <ButtonPrimary text="Entrar" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs/>
      </Grid>
    </div>
  )
}

export default Login;