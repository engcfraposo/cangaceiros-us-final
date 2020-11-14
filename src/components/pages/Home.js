import withRoot from '../../constants/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from '../organisms/templates/ProductCategories';
import ProductSmokingHero from '../organisms/templates/ProductSmokingHero';
import AppFooter from '../organisms/templates/AppFooter';
import ProductHero from '../organisms/templates/ProductHero';
import ProductValues from '../organisms/templates/ProductValues';
import ProductHowItWorks from '../organisms/templates/ProductHowItWorks';
import ProductCTA from '../organisms/templates/ProductCTA';
import AppAppBar from '../organisms/templates/AppAppBar';

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
