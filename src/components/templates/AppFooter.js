import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

import Typography from '../atoms/Typography';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));


export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid item>
          <Typography variant="caption">
            {'App desenvolvido para apresentação do Projeto Final '}
            <Link href="https://gama.academy/" rel="sponsored" title="Gamma Academy">
              Gamma Academy.
              </Link>
            {' '}
            <Link href="https://github.com/engcfraposo/cangaceiros-us-final" rel="sponsored" title="grupo">
              Desenvolvido pelo Grupo 04
              </Link>
            </Typography>
        </Grid>

      </Container>
    </Typography>
  );
}
