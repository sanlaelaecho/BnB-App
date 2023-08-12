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
    {name: 'Switzerland', img: 'https://media.istockphoto.com/id/1364217752/photo/lauterbrunnen-valley-switzerland.webp?b=1&s=170667a&w=0&k=20&c=IU7RgSfYn7grLSOD4fTJbfNNRP7a8tDCQYw2zk1OoZE=', category: categories[0], price: 5.95},
    {name: 'Italy', img: 'https://media.timeout.com/images/106015066/750/562/image.jpg', category: categories[0], price: 6.95},
    {name: 'France', img: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg', category: categories[0], price: 3.95},
    {name: 'Germany', img: 'https://lp-cms-production.imgix.net/features/2015/12/GettyRF_465892570-1-571092c9c65f.jpg?auto=format&q=75&w=1920', category: categories[0], price: 14.95},
    {name: 'United Kingdom', img: 'https://www.harlemworldmagazine.com/wp-content/uploads/2022/06/United-Kingdom.jpg', category: categories[0], price: 13.95},
    {name: 'Greece', img: 'https://cdn.tourradar.com/s3/serp/original/2147_iyMRxiWm.jpg', category: categories[0], price: 25.95},
    {name: 'Netherlands', img: 'https://lp-cms-production.imgix.net/2023-03/GettyImages-937057490.jpeg', category: categories[0], price: 1.95},
    {name: 'Poland', img: 'https://www.pacificprime.com/blog/wp-content/uploads/Poland-9-Best-Cities-For-Expats-1200x720.jpg', category: categories[0], price: 4.95},
    {name: 'Ukraine', img: 'https://i.dailymail.co.uk/1s/2023/08/07/01/74025985-12379305-image-m-24_1691366454412.jpg', category: categories[0], price: 3.95},
    {name: 'Norway', img: 'https://cdn.britannica.com/64/94864-050-223C3FE6/Northern-lights-sky-Kautokeino.jpg', category: categories[0], price: 7.95},
    {name: 'Garlic Bread', img: '🍞', category: categories[3], price: 1.95},
    {name: 'French Fries', img: '🍟', category: categories[4], price: 2.95},
    {name: 'Green Salad', img: '🥗', category: categories[4], price: 3.95},
    {name: 'Ice Cream', img: '🍨', category: categories[5], price: 1.95},
    {name: 'Cup Cake', img: '🧁', category: categories[5], price: 0.95},
    {name: 'Custard', img: '🍮', category: categories[5], price: 2.95},
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