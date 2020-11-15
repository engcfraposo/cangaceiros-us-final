import withRoot from '../constants/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from '../components/atoms/Markdown';
import AppForm from '../components/templates/AppForm';
import Typography from '../components/atoms/Typography';
import AppAppBar from '../components/templates/AppAppBar';
import privacy from '../constants/privacy-pt.md';
import AppFooter from '../components/templates/AppFooter';

function Privacy() {
  return (
    <>
<<<<<<< HEAD
    <AppAppBar />
    <React.Fragment>
=======
>>>>>>> 3220bab9a3135ad522fd26b734036b31d8b166c3
      <AppAppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Termo de Privacidade
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
<<<<<<< HEAD
    </React.Fragment>
  </>
=======
    </>
>>>>>>> 3220bab9a3135ad522fd26b734036b31d8b166c3
  );
}

export default withRoot(Privacy);
