import React from 'react';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import NewArrivals from './components/Sections/NewArrivals';
import content from './data/content.json';
import Category from './components/Sections/Categories/Category';


const Shop = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <NewArrivals />
      {content.categories?.length > 0 && (
        <Category title={content.categories[0].title} data={content.categories[0].data} />
        
      )}
    </>
  );
};

export default Shop;
