import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  primary: {
    backgroundColor: '#A30601',
    color: '#fff',
    width: '100px',
    height: '48px',
    textTransform: 'unset',
    '&:hover': {
      backgroundColor: '#A30601',
    },
    '&:active': {
      backgroundColor: '#A30601',
    },
  },
  outlined: {
    backgroundColor: 'transparent',
    border: '1px solid #A30601',
    color: '#A30601',
    width: '100px',
    height: '48px',
    textTransform: 'unset',
    '&:hover': {
      backgroundColor: '#A30601',
      color: '#fff',
    },
    '&:active': {
      backgroundColor: '#A30601',
      color: '#fff',
    },
  },
});
