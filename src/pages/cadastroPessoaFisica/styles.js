import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  content: {
    display: 'flex',
    padding: '50px',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '25px',
    fontWeight: '500',
  },
  grid_align: {
    display: 'flex',
    alignItems: 'center',
  },
  icon_edit: {
    color: '#ffc107',
  },
  icon_trash: {
    color: '#d32f2f',
  },
});
