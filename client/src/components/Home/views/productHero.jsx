import * as React from 'react';
import Button from '../components/Button';
import Typography from '../../../config/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from 'react-router-dom';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Schedule your Tasks for better off-days
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best Task assigning platform hosted on the blockchain.
      </Typography>
      <Link to="/dashboard">
        <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          sx={{ minWidth: 200 }}
        >
          Get Started
        </Button>
      </Link>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
