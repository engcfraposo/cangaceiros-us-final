import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';
import ProductHeroLayout from './ProductHeroLayout';

import TicketsService from '../../services/tickets.service'
import AuthService from '../../services/auth.service'

const backgroundImage =
  'https://queropassagem.com.br/blog/wp-content/uploads/2016/05/porto-seguro-bahia-destinos-nordeste.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#F05027', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const authService = new AuthService()
  const ticketsService = new TicketsService()

  function handleClick() {
    authService.login({ login: 'cangaceirosus@gmail.com', password: 'cangaceirosus' })
      .then(res => {
        ticketsService.ticketsList()
          .then(res => console.log(res))
      })


  }
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h1" marked="center">
        Seu sonho começa agora!
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Compre sua passagem com os melhores preços do mercado.
      </Typography>
      <Button
        style={{ color: '#F05027' }}
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/signup"
      >
        Registre-se
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Qual o seu destino hoje?
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
