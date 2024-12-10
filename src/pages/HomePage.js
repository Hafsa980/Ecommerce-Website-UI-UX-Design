import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import FlashSales from '../components/FlashSales';
import Categories from '../components/Categories';
import BestSellingProducts from '../components/BestSellingProducts';
import BannerWithTimer from '../components/BannerWithTimer';
import ProductList from '../components/ProductList';
import NewArrival from '../components/NewArrival';
import Footer from '../components/Footer';

const HomePage = () => (
  <div>
    <Header />
    <Banner />
    <FlashSales />
    <Categories />
    <BestSellingProducts />
    <BannerWithTimer />
    <ProductList />
    <NewArrival />
    <Footer />
  </div>
);

export default HomePage;
