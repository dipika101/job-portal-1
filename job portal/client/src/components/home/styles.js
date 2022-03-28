import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      margin: 'inherit',
    },
  },
  appBarSearch: {
    borderRadius: 10,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    
  },

  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    margin: 'inherit',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));