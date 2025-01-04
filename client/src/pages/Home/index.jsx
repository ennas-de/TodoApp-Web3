import * as React from 'react';
import ProductCategories from '../../components/Home/views/ProductCategories';
import ProductSmokingHero from '../../components/Home/views/ProductSmokingHero';
import ProductHero from '../../components/Home/views/productHero';
import ProductValues from '../../components/Home/views/ProductValues';
import ProductHowItWorks from '../../components/Home/views/ProductHowItWorks';
import ProductCTA from '../../components/Home/views/ProductCTA';
import withRoot from '../../components/Home/withRoot';

import NavBar from '../../widgets/Navbar';
import Footer from '../../widgets/Footer';

function Index() {
  return (
    <React.Fragment>
      <NavBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);