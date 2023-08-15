require('dotenv').config();
require('./database');

const Category = require('../models/category');
const country = require('../models/country')
const Country = require('../models/country')
const item = require('../models/item');
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
  ]);

  await Country.deleteMany({});
  const countries = await Country.create([
    {name: 'Switzerland', img: 'https://media.istockphoto.com/id/1364217752/photo/lauterbrunnen-valley-switzerland.webp?b=1&s=170667a&w=0&k=20&c=IU7RgSfYn7grLSOD4fTJbfNNRP7a8tDCQYw2zk1OoZE=', category: categories[0], price: $$$$},
    {name: 'Italy', img: 'https://media.timeout.com/images/106015066/750/562/image.jpg', category: categories[0], price: $$$},
    {name: 'France', img: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg', category: categories[0], price: $$$},
    {name: 'Germany', img: 'https://lp-cms-production.imgix.net/features/2015/12/GettyRF_465892570-1-571092c9c65f.jpg?auto=format&q=75&w=1920', category: categories[0], price: $$$},
    {name: 'United Kingdom', img: 'https://www.harlemworldmagazine.com/wp-content/uploads/2022/06/United-Kingdom.jpg', category: categories[0], price: $$$},
    {name: 'Greece', img: 'https://cdn.tourradar.com/s3/serp/original/2147_iyMRxiWm.jpg', category: categories[0], price: $$},
    {name: 'Netherlands', img: 'https://lp-cms-production.imgix.net/2023-03/GettyImages-937057490.jpeg', category: categories[0], price: $$},
    {name: 'Poland', img: 'https://www.pacificprime.com/blog/wp-content/uploads/Poland-9-Best-Cities-For-Expats-1200x720.jpg', category: categories[0], price: $$},
    {name: 'Ukraine', img: 'https://i.dailymail.co.uk/1s/2023/08/07/01/74025985-12379305-image-m-24_1691366454412.jpg', category: categories[0], price: $$},
    {name: 'Norway', img: 'https://cdn.britannica.com/64/94864-050-223C3FE6/Northern-lights-sky-Kautokeino.jpg', category: categories[0], price: $$$},
    {name: 'United States', img: 'https://media.nomadicmatt.com/2023/ellistour1.jpeg', category: categories[1], price: $$$},
    {name: 'Canada', img: 'https://cdn.getyourguide.com/img/location/58de13677a527.jpeg/68.jpg', category: categories[1], price: $$$},
    {name: 'Mexico', img: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1222044724v2.jpg', categories[1], price: $},
    {name: 'Greenland', img: 'https://image.cnbcfm.com/api/v1/image/106410296-1582705868656gettyimages-1072511236.jpeg?v=1582705935&w=1600&h=900', category: categories[1], price: $$},
    {name: 'Costa Rica', img: 'https://lp-cms-production.imgix.net/2020-11/shutterstockRF_691933330.jpg', category: categories[1], price: $},
    {name: 'Puerto Rico', img: 'https://www.globotreks.com/wp-content/uploads/2020/02/San-Juan-El-Morro-Aerial.jpg', category: categories[1], price: $},
    {name: 'Brazil', img: 'https://www.traveloffpath.com/wp-content/uploads/2022/11/Aerial-View-Of-Christ-The-Redeemer-In-Rio-de-Janeiro-Brazil.jpg', category: categories[2], price: $},
    {name: 'Argentina', img: 'https://travel2next.com/wp-content/uploads/2020/09/historic-landmarks-in-argentina.jpg', category: categories[2], price: $},
    {name: 'Columbia', img: 'https://www.livingoutlau.com/wp-content/uploads/2022/08/Las-Lajas-Sanctuary-Ipiales.jpg', category: categories[2], price: $},
    {name: 'Peru', img: 'https://www.destguides.com/dynamic-files/itinerary/2767/background-image-4x3.jpg', category: categories[2], price: $},
    {name: 'Chile', img: 'https://d3vonci41uckcv.cloudfront.net/old-images/original/ad3a7e34-3f08-4ba9-a5f0-ad2050712243.Chile-easterisland-ahunaunau.jpg', category: categories[2], price: $},
    {name: 'China', img: 'https://media.venturatravel.org/unsafe/800x600/smart/day_detail/1677543a-585b-46c3-b634-05958629c8d6-csm_peking_-_grosse_mauer_-_sonnenuntergang_-_shutterstock_-_nur_durch_cth__2__b9ee1fe99c.jpg', category: categories[3], price: $},
    {name: 'South Korea', img: 'https://lp-cms-production.imgix.net/2019-06/09a64fea2933f6da77ab07d671d1f678-south-korea.jpg', category: categories[3], price: $$},
    {name: 'Japan', img: 'https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg', category: categories[3], price: $$},
    {name: 'India', img: 'https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200', category: categories[3], price: $},
    {name: 'Myanmar', img: 'https://cdn.britannica.com/40/194240-050-C1ED1F29/Buddhist-temples-Pagan-Myanmar.jpg', category: categories[3], price: $},
    {name: 'Thailand', img: 'https://www.nomadicmatt.com/wp-content/uploads/2011/12/11reasonsthailand.jpg', category: categories[3], price: $},
    {name: 'United Arab Emirates', img: 'https://www.expatica.com/app/uploads/sites/15/2019/11/united-arab-emirates.jpg', category: categories[3], price: $$$$},
    {name: 'Australia', img: 'https://www.jonesaroundtheworld.com/wp-content/uploads/2021/09/Sydney-Opera-House-Landmark-Australia.jpg', category: categories[4], price: $$},
    {name: 'Egypt', img: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1037036482v2.jpg', category: categories[5], price: $$},
    {name: 'South Africa', img: 'https://www.intergest.com/fileadmin/_processed_/b/b/csm_Banner_SOUTH_AFRICA_a9bac4e3be.jpg', category: categories[5], price: $$},
    {name: 'Nigeria', img: 'https://img.atlasobscura.com/r2ashmTvzk8RqB_ii-FODOVTxR3oBaE7SP4ovkcS6zw/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy84MjNk/MDZhMi03NTM3LTQ4/MTgtYWJlMi03OWZm/NWJjYmJiYmQyNzM3/YTYxMzFkNzRmNjEz/M2JfR2V0dHlJbWFn/ZXMtNDgxNjYwOTc5/LmpwZw.jpg', category: categories[5], price: $},
    {name: 'Kenya', img: 'https://travellersworldwide.com/wp-content/uploads/2022/12/Shutterstock_1766609975.jpg.webp', category: categories[5], price: $},
  ]);
  

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Zurich', img: 'https://switzerland-tour.com/storage/media/Zurich/Zurich-s-Old-Town.jpg', country: countries[0], price: 795},
    {name: 'Bern', img: 'https://peakvisor.com/photo/SD/Switzerland-Bern-aerial-landscape.jpg', country: countries[0], price: 795},
  ]);


  console.log(items)

  process.exit();

})();