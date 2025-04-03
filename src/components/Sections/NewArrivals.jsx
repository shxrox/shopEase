import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Cards/Card'
import Jeans from '../../assets/img/jeans.jpg'
import Shirts from '../../assets/img/shirts.jpg'
import Tshirts from '../../assets/img/tshirts.jpeg'
import Dresses from '../../assets/img/dresses.jpg'
import Kuertis from '../../assets/img/kurtis.jpg'
import Joggers from '../../assets/img/joggers.jpg'
import Carousel from 'react-multi-carousel'; // Import Carousel
import 'react-multi-carousel/lib/styles.css'; // Import styles

const items = [
  { 'title': 'Jeans', imagePath: Jeans },
  { 'title': 'Shirts', imagePath: Shirts },
  { 'title': 'Tshirts', imagePath: Tshirts },
  { 'title': 'Dresses', imagePath: Dresses },
  { 'title': 'Kuertis', imagePath: Kuertis },
  { 'title': 'Joggers', imagePath: Joggers }
];

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={'New Arrivals'} />
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass={'react-slider-custom-item'}
        className='px-8'
      >
        {items && items?.map((item, index) => (
          <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} />
        ))}
      </Carousel>
    </>
  );
}

export default NewArrivals;

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 4
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1
  }
};
