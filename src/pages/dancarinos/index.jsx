import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import ButtonOutlined from '../../components/buttons/buttonOutlined/buttonOutlined';
import ButtonPrimary from '../../components/buttons/buttonPrimary/buttonPrimary';
import { useStyles } from './styles';

function Dancarinos() {
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
              <div className={classes.title}>
                Dançarinos
              </div>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} className={classes.grid_align}>
                <Grid item xs={9}>
                  <div>
                    Joãozinho
                  </div>
                </Grid>
                <Grid item xs={3} className={classes.grid_align} style={{justifyContent:"flex-end"}}>
                  <IconButton className={classes.icon_edit}>
                    <FaPencilAlt/>
                  </IconButton>
                  <IconButton  className={classes.icon_trash}>
                    <FaTrash/>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <ButtonOutlined text='Voltar' style={{ marginRight: '10px' }} onClick={onGoback}/>
              <Link to="/CadastroDancarino">
                <ButtonPrimary text='Cadastrar'/>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

export default Dancarinos;
