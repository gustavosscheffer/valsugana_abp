import { Grid, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import ButtonOutlined from '../../components/buttons/buttonOutlined/buttonOutlined';
import ButtonPrimary from '../../components/buttons/buttonPrimary/buttonPrimary';
import { PessoaFisicaService } from '../../services/api';
import { useStyles } from './styles';

function PessoasFisicas() {
  const [people, setPeople] = useState([]);
  const classes = useStyles();
  const history = useHistory();
  const onGoback = () => history.goBack();

  useEffect(() => {
    PessoaFisicaService.getPeople().then(({ data }) => setPeople([].concat(data)))
  }, []);


  async function handleDeletePerson(id) {
    await PessoaFisicaService.deletePerson(id)

    PessoaFisicaService.getPeople()
      .then(({ data }) => {
        setPeople([].concat(data))
      });
  }
  return (
    <div className={classes.content}>
      <Grid container spacing={0}>
        <Grid item xs />
        <Grid item xs>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <div className={classes.title}>Pessoas Físicas</div>
            </Grid>
            <Grid item xs={12}>
              {
                people.map((person) => (

                  <Grid container spacing={2} className={classes.grid_align} key={person.id}>
                    <Grid item xs={9}>
                      <div>{person.nome}</div>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      className={classes.grid_align}
                      style={{ justifyContent: 'flex-end' }}
                    >
                      <IconButton className={classes.icon_edit}>
                        <FaPencilAlt />
                      </IconButton>
                      <IconButton className={classes.icon_trash} onClick={() => handleDeletePerson(person.id)}>
                        <FaTrash />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))
              }
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <ButtonOutlined text='Voltar' style={{ marginRight: '10px' }} onClick={onGoback} />
              <Link to="/CadastroPessoaFisica">
                <ButtonPrimary text='Cadastrar' />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}


export default PessoasFisicas;
