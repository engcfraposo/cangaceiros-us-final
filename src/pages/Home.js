import withRoot from '../constants/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from '../components/templates/ProductCategories';
import ProductSmokingHero from '../components/templates/ProductSmokingHero';
import AppFooter from '../components/templates/AppFooter';
import ProductHero from '../components/templates/ProductHero';
import ProductValues from '../components/templates/ProductValues';
import ProductCTA from '../components/templates/ProductCTA';
import AppAppBar from '../components/templates/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
