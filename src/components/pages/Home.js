import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from '../organisms/views/ProductCategories';
import ProductSmokingHero from '../organisms/views/ProductSmokingHero';
import AppFooter from '../organisms/views/AppFooter';
import ProductHero from '../organisms/views/ProductHero';
import ProductValues from '../organisms/views/ProductValues';
import ProductHowItWorks from '../organisms/views/ProductHowItWorks';
import ProductCTA from '../organisms/views/ProductCTA';
import AppAppBar from '../organisms/views/AppAppBar';

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
