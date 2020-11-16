import withRoot from '../constants/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import TextField from '../components/atoms/TextField';
import Typography from '../components/atoms/Typography';
import AppFooter from '../components/templates/AppFooter';
import AppAppBar from '../components/templates/AppAppBar';
import AppForm from '../components/templates/AppForm';
import FormButton from '../components/organisms/form/FormButton';
import AuthService from '../services/auth.service';
import FormFeedback from '../components/organisms/form/FormFeedback';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignUp() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

  const authService = new AuthService()

  const formik = useFormik({  
    initialValues: {
      nome: '',
      cpf:'',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      nome: Yup.string().min(2).required('Requerido'),
      cpf: Yup.string().max(11).min(11).required('Requerido'),
      email: Yup.string().email('Email invalido').required('Requerido'),
      password: Yup.string().required('Requerido')
    }),
    onSubmit: values => {
      setSent(true)
      //alert(JSON.stringify(values, null, 2));
      authService.signup({
        nome: values.nome,
        cpf: values.cpf,
        email: values.email,
        login: values.email,
        password: values.password
      });
      return setSent(false)
    },
  })

  const { errors, touched } = formik

  return (
    <>
      <AppAppBar />
      <AppForm>
        <>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Cadastre-se
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/login" underline="always">
              Você já tem cadastro?
            </Link>
          </Typography>
        </>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  fullWidth
                  touched={errors.nome && touched.nome}
                  label="Nome"
                  margin="normal"
                  name="nome"
                  id="nome"
                  required
                  size="large"
                  onChange={formik.handleChange}
                  value={formik.values.nome}
                />
                { errors.nome && touched.nome && <FormFeedback>{ errors.nome }</FormFeedback>}
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  fullWidth
                  touched={errors.cpf && touched.cpf}
                  label="CPF(Só numeros)"
                  margin="normal"
                  name="cpf"
                  id="cpf"
                  maxlength={11}
                  required
                  size="large"
                  onChange={formik.handleChange}
                  value={formik.values.cpf}
                />
                { errors.cpf && touched.cpf && <FormFeedback>{ errors.cpf }</FormFeedback>}
                </Grid>
              </Grid>
                <TextField
                  autoFocus
                  fullWidth
                  touched={errors.email && touched.email}
                  label="E-mail"
                  margin="normal"
                  name="email"
                  id="email"
                  type="email"
                  required
                  size="large"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                { errors.email && touched.email && <FormFeedback>{ errors.email }</FormFeedback>}              
                <TextField
                  autoFocus
                  fullWidth
                  touched={errors.password && touched.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  id="password"
                  required
                  size="large"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                { errors.password && touched.password && <FormFeedback>{ errors.password }</FormFeedback>}
              <FormButton
                className={classes.button}
                size="large"
                color="secondary"
                fullWidth
              >
                {sent?'Em progresso...':'Cadastrado'}
              </FormButton>
            </form>
      </AppForm>
      <AppFooter />
    </>
  );
}

export default withRoot(SignUp);
