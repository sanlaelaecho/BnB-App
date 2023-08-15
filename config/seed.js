require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Europe', sortOrder: 10},
    {name: 'North America', sortOrder: 20},
    {name: 'South America', sortOrder: 30},
    {name: 'Asia', sortOrder: 40},
    {name: 'Australia', sortOrder: 50},
    {name: 'Africa', sortOrder: 60},
    {name: 'Antarctica', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Switzerland', img: 'https://media.istockphoto.com/id/1364217752/photo/lauterbrunnen-valley-switzerland.webp?b=1&s=170667a&w=0&k=20&c=IU7RgSfYn7grLSOD4fTJbfNNRP7a8tDCQYw2zk1OoZE=', category: categories[0], price: 500ß},
    {name: 'Italy', img: 'https://media.timeout.com/images/106015066/750/562/image.jpg', category: categories[0], price: 600},
    {name: 'France', img: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg', category: categories[0], price: 300},
    {name: 'Germany', img: 'https://lp-cms-production.imgix.net/features/2015/12/GettyRF_465892570-1-571092c9c65f.jpg?auto=format&q=75&w=1920', category: categories[0], price: 1400},
    {name: 'United Kingdom', img: 'https://www.harlemworldmagazine.com/wp-content/uploads/2022/06/United-Kingdom.jpg', category: categories[0], price: 1300},
    {name: 'Greece', img: 'https://cdn.tourradar.com/s3/serp/original/2147_iyMRxiWm.jpg', category: categories[0], price: 250},
    {name: 'Netherlands', img: 'https://lp-cms-production.imgix.net/2023-03/GettyImages-937057490.jpeg', category: categories[0], price: 1000},
    {name: 'Poland', img: 'https://www.pacificprime.com/blog/wp-content/uploads/Poland-9-Best-Cities-For-Expats-1200x720.jpg', category: categories[0], price: 495},
    {name: 'Ukraine', img: 'https://i.dailymail.co.uk/1s/2023/08/07/01/74025985-12379305-image-m-24_1691366454412.jpg', category: categories[0], price: 395},
    {name: 'Norway', img: 'https://cdn.britannica.com/64/94864-050-223C3FE6/Northern-lights-sky-Kautokeino.jpg', category: categories[0], price: 795},
    {name: 'United States', img: 'https://media.nomadicmatt.com/2023/ellistour1.jpeg', category: categories[1], price: 1.95},
    {name: 'Canada', img: 'https://cdn.getyourguide.com/img/location/58de13677a527.jpeg/68.jpg', category: categories[1], price: 1.95},
    {name: 'Mexico', img: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1222044724v2.jpg', categories[1], price: 299},
    {name: 'Greenland', img: 'https://image.cnbcfm.com/api/v1/image/106410296-1582705868656gettyimages-1072511236.jpeg?v=1582705935&w=1600&h=900', category: categories[1], price: 1.95},
    {name: 'Costa Rica', img: 'https://lp-cms-production.imgix.net/2020-11/shutterstockRF_691933330.jpg', category: categories[1], price: 1.95},
    {name: 'Puerto Rico', img: 'https://www.globotreks.com/wp-content/uploads/2020/02/San-Juan-El-Morro-Aerial.jpg', category: categories[1], price: 1.95},
    {name: 'Brazil', img: 'https://www.traveloffpath.com/wp-content/uploads/2022/11/Aerial-View-Of-Christ-The-Redeemer-In-Rio-de-Janeiro-Brazil.jpg', category: categories[2], price: 2.95},
    {name: 'Argentina', img: 'https://travel2next.com/wp-content/uploads/2020/09/historic-landmarks-in-argentina.jpg', category: categories[2], price: 3.95},
    {name: 'Columbia', img: '🍨', category: categories[2], price: 1.95},
    {name: 'Peru', img: '🧁', category: categories[2], price: 0.95},
    {name: 'Chile', img: '🍮', category: categories[2], price: 2.95},
    {name: 'Strawberry Shortcake', img: '🍰', category: categories[5], price: 3.95},
    {name: 'Milk', img: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee', img: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai', img: '🍹', category: categories[6], price: 8.95},
    {name: 'Beer', img: '🍺', category: categories[6], price: 3.95},
    {name: 'Wine', img: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();