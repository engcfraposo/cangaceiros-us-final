import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../atoms/Typography';
import aviaovoando from '../../assets/img/svg/001-aviao-voando.svg';
import bilhete from '../../assets/img/svg/002-bilhete.svg';
import telefone from '../../assets/img/svg/003-telefone.svg';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img

          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={aviaovoando}
                alt="avião"
              />
              <Typography variant="h6" className={classes.title}>
                As melhores viagens
              </Typography>
              <Typography variant="h5">
              A Cangaceiros US é a melhor plataforma para você pesquisar e comprar passagens aéreas promocionais e
              viajar pelo Brasil e pelo mundo.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={bilhete}
                alt="Bilhete"
              />
              <Typography variant="h6" className={classes.title}>
              Por que é mais barato voar pela Cangaceiros US?
              </Typography>
              <Typography variant="h5">
              Porque emitimos passagem aérea mais barata com as milhas de quem
              deseja vender e, assim, conseguimos descontos de até 50%.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={telefone}
                alt="Atendimento"
              />
              <Typography variant="h6" className={classes.title}>
              Atendimento 24h
              </Typography>
              <Typography variant="h5">
              Além de oferecer passagens aéreas em promoção,
              cuidamos de todo o processo de emissão para você.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
