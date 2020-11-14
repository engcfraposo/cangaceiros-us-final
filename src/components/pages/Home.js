import withRoot from '../../constants/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from '../templates/ProductCategories';
import ProductSmokingHero from '../templates/ProductSmokingHero';
import AppFooter from '../templates/AppFooter';
import ProductHero from '../templates/ProductHero';
import ProductValues from '../templates/ProductValues';
import ProductHowItWorks from '../templates/ProductHowItWorks';
import ProductCTA from '../templates/ProductCTA';
import AppAppBar from '../templates/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
