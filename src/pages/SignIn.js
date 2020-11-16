import withRoot from '../constants/withRoot';
// --- Post bootstrap -----
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Typography from '../components/atoms/Typography';
import TextField from '../components/atoms/TextField';
import AppFooter from '../components/templates/AppFooter';
import AppAppBar from '../components/templates/AppAppBar';
import AppForm from '../components/templates/AppForm';
import FormButton from '../components/organisms/form/FormButton';
import FormFeedback from '../components/organisms/form/FormFeedback';
import AuthService from '../services/auth.service';

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

function SignIn() {
  const classes = useStyles();
  const [sent, setSent] = useState(false);

  const authService = new AuthService()

  const formik = useFormik({  
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Email invalido').required('Requerido'),
      password: Yup.string().required('Requerido')
    }),
    onSubmit: values => {
      setSent(true)
      //alert(JSON.stringify(values, null, 2));
      authService.login({
        login: values.email,
        password: values.password
      });
      return setSent(false)
    },
  })

  const { errors, touched }= formik
  

  return (
    <>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Logar
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link href="/singup" align="center" underline="always">
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
              <TextField
                autoFocus
                fullWidth
                touched={errors.password && touched.password}
                label="E-mail"
                margin="normal"
                name="email"
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
                {sent?'Em progresso...':'Logar'}
              </FormButton>
            </form>
        <Typography align="center">
          <Link underline="always" href="/signup/">
            Não tem cadastro?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </>
  );
}

export default withRoot(SignIn);
