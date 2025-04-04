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
      {content.categories?.length > 0 &&
        content.categories.map((category, index) => (
          <Category key={index} title={category.title} data={category.data} />
        ))}
    </>
  );
};

export default Shop;
