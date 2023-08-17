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
    {name: 'Switzerland', img: 'https://media.istockphoto.com/id/1364217752/photo/lauterbrunnen-valley-switzerland.webp?b=1&s=170667a&w=0&k=20&c=IU7RgSfYn7grLSOD4fTJbfNNRP7a8tDCQYw2zk1OoZE=', category: categories[0], price: '$$$$'},
    {name: 'Italy', img: 'https://media.timeout.com/images/106015066/750/562/image.jpg', category: categories[0], price: '$$$'},
    {name: 'France', img: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg', category: categories[0], price: '$$$'},
    {name: 'Germany', img: 'https://lp-cms-production.imgix.net/features/2015/12/GettyRF_465892570-1-571092c9c65f.jpg?auto=format&q=75&w=1920', category: categories[0], price: '$$$'},
    {name: 'United Kingdom', img: 'https://www.harlemworldmagazine.com/wp-content/uploads/2022/06/United-Kingdom.jpg', category: categories[0], price: '$$$'},
    {name: 'Greece', img: 'https://cdn.tourradar.com/s3/serp/original/2147_iyMRxiWm.jpg', category: categories[0], price: '$$'},
    {name: 'Netherlands', img: 'https://lp-cms-production.imgix.net/2023-03/GettyImages-937057490.jpeg', category: categories[0], price: '$$'},
    {name: 'Poland', img: 'https://www.pacificprime.com/blog/wp-content/uploads/Poland-9-Best-Cities-For-Expats-1200x720.jpg', category: categories[0], price: '$$'},
    {name: 'Ukraine', img: 'https://i.dailymail.co.uk/1s/2023/08/07/01/74025985-12379305-image-m-24_1691366454412.jpg', category: categories[0], price: '$$'},
    {name: 'Norway', img: 'https://cdn.britannica.com/64/94864-050-223C3FE6/Northern-lights-sky-Kautokeino.jpg', category: categories[0], price: '$$$'},
    {name: 'United States', img: 'https://media.nomadicmatt.com/2023/ellistour1.jpeg', category: categories[1], price: '$$$'},
    {name: 'Canada', img: 'https://cdn.getyourguide.com/img/location/58de13677a527.jpeg/68.jpg', category: categories[1], price: '$$$'},
    {name: 'Mexico', img: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1222044724v2.jpg', category: categories[1], price: '$'},
    {name: 'Greenland', img: 'https://image.cnbcfm.com/api/v1/image/106410296-1582705868656gettyimages-1072511236.jpeg?v=1582705935&w=1600&h=900', category: categories[1], price: '$$'},
    {name: 'Costa Rica', img: 'https://lp-cms-production.imgix.net/2020-11/shutterstockRF_691933330.jpg', category: categories[1], price: '$'},
    {name: 'Puerto Rico', img: 'https://www.globotreks.com/wp-content/uploads/2020/02/San-Juan-El-Morro-Aerial.jpg', category: categories[1], price: '$'},
    {name: 'Brazil', img: 'https://www.traveloffpath.com/wp-content/uploads/2022/11/Aerial-View-Of-Christ-The-Redeemer-In-Rio-de-Janeiro-Brazil.jpg', category: categories[2], price: '$'},
    {name: 'Argentina', img: 'https://travel2next.com/wp-content/uploads/2020/09/historic-landmarks-in-argentina.jpg', category: categories[2], price: '$'},
    {name: 'Colombia', img: 'https://www.livingoutlau.com/wp-content/uploads/2022/08/Las-Lajas-Sanctuary-Ipiales.jpg', category: categories[2], price: '$'},
    {name: 'Peru', img: 'https://www.destguides.com/dynamic-files/itinerary/2767/background-image-4x3.jpg', category: categories[2], price: '$'},
    {name: 'Chile', img: 'https://d3vonci41uckcv.cloudfront.net/old-images/original/ad3a7e34-3f08-4ba9-a5f0-ad2050712243.Chile-easterisland-ahunaunau.jpg', category: categories[2], price: '$'},
    {name: 'China', img: 'https://media.venturatravel.org/unsafe/800x600/smart/day_detail/1677543a-585b-46c3-b634-05958629c8d6-csm_peking_-_grosse_mauer_-_sonnenuntergang_-_shutterstock_-_nur_durch_cth__2__b9ee1fe99c.jpg', category: categories[3], price: '$'},
    {name: 'South Korea', img: 'https://lp-cms-production.imgix.net/2019-06/09a64fea2933f6da77ab07d671d1f678-south-korea.jpg', category: categories[3], price: '$$'},
    {name: 'Japan', img: 'https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg', category: categories[3], price: '$$'},
    {name: 'India', img: 'https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200', category: categories[3], price: '$'},
    {name: 'Myanmar', img: 'https://cdn.britannica.com/40/194240-050-C1ED1F29/Buddhist-temples-Pagan-Myanmar.jpg', category: categories[3], price: '$'},
    {name: 'Thailand', img: 'https://www.nomadicmatt.com/wp-content/uploads/2011/12/11reasonsthailand.jpg', category: categories[3], price: '$'},
    {name: 'United Arab Emirates', img: 'https://www.expatica.com/app/uploads/sites/15/2019/11/united-arab-emirates.jpg', category: categories[3], price: '$$$$'},
    {name: 'Australia', img: 'https://www.jonesaroundtheworld.com/wp-content/uploads/2021/09/Sydney-Opera-House-Landmark-Australia.jpg', category: categories[4], price: '$$'},
    {name: 'Egypt', img: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1037036482v2.jpg', category: categories[5], price: '$$'},
    {name: 'South Africa', img: 'https://www.intergest.com/fileadmin/_processed_/b/b/csm_Banner_SOUTH_AFRICA_a9bac4e3be.jpg', category: categories[5], price: '$$'},
    {name: 'Nigeria', img: 'https://img.atlasobscura.com/r2ashmTvzk8RqB_ii-FODOVTxR3oBaE7SP4ovkcS6zw/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy84MjNk/MDZhMi03NTM3LTQ4/MTgtYWJlMi03OWZm/NWJjYmJiYmQyNzM3/YTYxMzFkNzRmNjEz/M2JfR2V0dHlJbWFn/ZXMtNDgxNjYwOTc5/LmpwZw.jpg', category: categories[5], price: '$'},
    {name: 'Kenya', img: 'https://travellersworldwide.com/wp-content/uploads/2022/12/Shutterstock_1766609975.jpg.webp', category: categories[5], price: '$'},
  ]);
  

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Zurich', img: 'https://switzerland-tour.com/storage/media/Zurich/Zurich-s-Old-Town.jpg', country: countries[0], airport: 'ZRH', price: 795.00},
    {name: 'Bern', img: 'https://peakvisor.com/photo/SD/Switzerland-Bern-aerial-landscape.jpg', country: countries[0], airport: 'BRN', price: 795.00},
    {name: 'Milan', img: 'https://media.timeout.com/images/105186767/image.jpg', country: countries[1], airport: 'MXP', price: 795.00},
    {name: 'Rome', img: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQxE51Dkdjl6kfq-YTlHI8_ssGCjwPrSMVRMr0JvlA5S-JYfsWAuRur0ZHzYXQahpIB', country: countries[1], airport: 'FCO', price: 795.00},
    {name: 'Paris', img: 'https://media.cntraveller.com/photos/6220bfe35e6084e5d4f02404/4:3/w_5120,h_3840,c_limit/Seine%20paris%20bike-GettyImages-1161606501.jpeg', country: countries[2], airport: 'CDG', price: 795.00},
    {name: 'Berlin', img: 'https://a.cdn-hotels.com/gdcs/production154/d1887/471414c9-f456-4041-83f5-d7b61063d287.jpg', country: countries[3], airport: 'BER', price: 795.00},
    {name: 'Hamburg', img: 'https://viatravelers.com/wp-content/uploads/2021/10/Elbphilharmonie-Hamburg.jpg', country: countries[3], airport: 'HAM', price: 795.00},
    {name: 'London', img: 'https://cdn.tiqets.com/wordpress/blog/wp-content/uploads/2020/09/shutterstock_1013811547.jpg', country: countries[4], airport: 'LHR', price: 795.00},
    {name: 'Oxford', img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/60/0a.jpg', country: countries[4], airport: 'OXF', price: 795.00},
    {name: 'Athens', img: 'https://lp-cms-production.imgix.net/2022-06/Greece_Athens_Zeus-temple.jpg', country: countries[5], airport: 'ATH', price: 795.00},
    {name: 'Santorini', img: 'https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg?impolicy=fcrop&w=800&h=533&q=medium', country: countries[5], airport: 'JTR', price: 795.00},
    {name: 'Amsterdam', img: 'https://media.nomadicmatt.com/2021/amsterdamneighborhood1.jpg', country: countries[6], airport: 'AMS', price: 795.00},
    {name: 'Rotterdam', img: 'https://www.webuildvalue.com/wp-content/uploads/modern-market-hall5.jpg', country: countries[6], airport: 'RTM', price: 795.00},
    {name: 'Warsaw', img: 'https://lp-cms-production.imgix.net/image_browser/warsaw%20scenery.jpg', country: countries[7], airport: 'WAW', price: 795.00},
    {name: 'Krakow', img: 'https://www.agoda.com/wp-content/uploads/2020/01/Things-to-do-in-Krakow-Main-market-square.jpg', country: countries[7], airport: 'KRK', price: 795.00},
    {name: 'Kyiv', img: 'https://www.bostonglobe.com/resizer/fL3kkwJJzFoIUovYi-XWjEF118c=/arc-anglerfish-arc2-prod-bostonglobe/public/XE6DBP72PVDO2I5ZGH2KJ3FMM4.jpg', country: countries[8], airport: 'IEV', price: 795.00},
    {name: 'Oslo', img: 'https://cdn.kimkim.com/files/a/images/73435fab0369993f3127f60325be84bdffba743f/original-1761428611fcab9b3ed89d9467a2058c.jpg', country: countries[9], airport: 'OSL', price: 795.00},
    {name: 'New York', img: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg', country: countries[10], airport: 'JFK', price: 795.00},
    {name: 'Los Angeles', img: 'https://www.introducinglosangeles.com/f/estados-unidos/los-angeles/guia/hollywood-boulevard-m.jpg', country: countries[10], airport: 'LAX', price: 795.00},
    {name: 'Chicago', img: 'https://tourscanner.com/blog/wp-content/uploads/2022/08/things-to-do-in-Downtown-Chicago.jpg', country: countries[10], airport: 'ORD', price: 795.00},
    {name: 'Toronto', img: 'https://a.cdn-hotels.com/gdcs/production23/d1075/4afaf5b7-161e-4ca5-8aff-c6f882d2ee64.jpg?impolicy=fcrop&w=800&h=533&q=medium', country: countries[11], airport: 'YYZ', price: 795.00},
    {name: 'Vancouver', img: 'https://tricycle.org/wp-content/uploads/2019/04/buddhism-in-vancouver-1024x683.jpg', country: countries[11], airport: 'YVR', price: 795.00},
    {name: 'Cancun', img: 'https://www.worldatlas.com/upload/94/49/83/cancun-mexico-jdross75.jpg', country: countries[12], airport: 'OXF', price: 795.00},
    {name: 'Mexico City', img: 'https://www.fodors.com/wp-content/uploads/2021/05/UltimateMexicoCity__HERO_shutterstock_1058054480.jpg', country: countries[12], airport: 'MEX', price: 795.00},
    {name: 'Nuuk', img: 'https://images.immediate.co.uk/production/volatile/sites/7/2019/08/G1BBW6-2edf7c8.jpg?quality=90&resize=980,654', country: countries[13], airport: 'GOH', price: 795.00},
    {name: 'San Jose', img: 'https://littlewanderbook.com/wp-content/uploads/2022/12/Roadtrip-Costa-Rica-14-van-25-scaled.jpg', country: countries[14], airport: 'SJC', price: 795.00},
    {name: 'San Juan', img: 'https://travellemming.com/wp-content/uploads/El-Morro-in-San-Juan.jpg', country: countries[15], airport: 'SJU', price: 795.00},
    {name: 'Rio de Janeiro', img: 'https://a.cdn-hotels.com/gdcs/production143/d357/42fb6908-dcd5-4edb-9f8c-76208494af80.jpg?impolicy=fcrop&w=800&h=533&q=medium', country: countries[16], airport: 'GIG', price: 795.00},
    {name: 'Sao Paulo', img: 'https://www.iheartbrazil.com/wp-content/uploads/2019/03/se-cathedral-square-sao-paulo-downtown-brazil.jpg', country: countries[16], airport: 'GRU', price: 795.00},
    {name: 'Buenos Aires', img: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Ff801f5fa-9ece-11ec-a33b-e5ebed659a52.jpg?crop=5338%2C3003%2C27%2C26', country: countries[17], airport: 'AEP', price: 795.00},
    {name: 'Bogota', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/4d/39/d0/el-paraiso-neighborhood.jpg?w=1200&h=1200&s=1', country: countries[18], airport: 'BOG', price: 795.00},
    {name: 'Lima', img: 'https://www.kuodatravel.com/wp-content/uploads/2016/08/Lima-Highlights-of-Perus-Most-Eclectic-City.jpg', country: countries[19], airport: 'LIM', price: 795.00},
    {name: 'Cusco', img: 'https://www.perurail.com/wp-content/uploads/2020/06/Monta%C3%B1a-de-los-7-colores-Cusco.jpg', country: countries[19], airport: 'CUZ', price: 795.00},
    {name: 'Santiago', img: 'https://imageio.forbes.com/specials-images/imageserve/63d829c353aaa6b4582e8c62/0x0.jpg?format=jpg&crop=953,537,x0,y71,safe&width=1200', country: countries[20], airport: 'SCL', price: 795.00},
    {name: 'Shanghai', img: 'https://image.cnbcfm.com/api/v1/image/107047375-1649993045647-gettyimages-1025137402-AFP_18P3J7.jpeg?v=1649997487&w=1920&h=1080', country: countries[21], airport: 'PVG', price: 795.00},
    {name: 'Beijing', img: 'https://cdn.britannica.com/03/198203-050-138BB1C3/entrance-Gate-of-Divine-Might-Beijing-Forbidden.jpg', country: countries[21], airport: 'PEK', price: 795.00},
    {name: 'Guangzhou', img: 'https://content.api.news/v3/images/bin/f6dd6ed4e76bfe145e16be498d00c286', country: countries[21], airport: 'CAN', price: 795.00},
    {name: 'Seoul', img: 'https://cw-gbl-gws-prod.azureedge.net/-/media/cw/apac/south-korea/office/korea-office-desktop.jpg?rev=8a811db68aca41eb9f6987617d0c67ba', country: countries[22], airport: 'ICN', price: 795.00},
    {name: 'Tokyo', img: 'https://facts.net/wp-content/uploads/2023/06/45-facts-about-tokyo-1688094762.jpeg', country: countries[23], airport: 'HND', price: 795.00},
    {name: 'Kyoto', img: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/02/Red-Torii-gates-in-Fushimi-Inari-shrine-in-Kyoto-Japan.jpg', country: countries[23], airport: 'KIX', price: 795.00},
    {name: 'Mumbai', img: 'https://cdn.myportfolio.com/7110bd9a9c83d97ed90b4758be565c85/7cf65034-0bca-420c-a47b-dbf276a82c66_rw_1920.jpg?h=950959047a23106dea7d062e47d92ee7', country: countries[24], airport: 'BOM', price: 795.00},
    {name: 'Agra', img: 'https://lp-cms-production.imgix.net/news/2019/06/taj-mahal.jpg', country: countries[24], airport: 'AGR', price: 795.00},
    {name: 'Yangon', img: 'https://assets-news.housing.com/news/wp-content/uploads/2022/08/14065415/yangon-sightseeing-and-things-to-do-FEATURE-compressed.jpg', country: countries[25], airport: 'RGN', price: 795.00},
    {name: 'Bangkok', img: 'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg', country: countries[26], airport: 'BKK', price: 795.00},
    {name: 'Dubai', img: 'https://static.independent.co.uk/2023/07/04/09/iStock-1193239486.jpg', country: countries[27], airport: 'DXB', price: 795.00},
    {name: 'Abu Dhabi', img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/66/a6.jpg', country: countries[27], airport: 'AUH', price: 795.00},
    {name: 'Sydney', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg', country: countries[28], airport: 'SYD', price: 795.00},
    {name: 'Melbourne', img: 'https://cdn.tiqets.com/wordpress/blog/wp-content/uploads/2020/01/Melbourne-city-skyline.jpg', country: countries[28], airport: 'MEL', price: 795.00},
    {name: 'Cairo', img: 'https://media.istockphoto.com/id/1174818077/photo/mosque-and-pyramids.jpg?s=612x612&w=0&k=20&c=kewLXiirLBe_QOeAQ2MPNFk8S4oxcTFt0AMPQ4mAXKY=', country: countries[29], airport: 'CAI', price: 795.00},
    {name: 'Luxor', img: 'https://www.thediscoveriesof.com/wp-content/uploads/2022/07/Luxor-Temple-shutterstock_1997301695.jpg', country: countries[29], airport: 'LXR', price: 795.00},
    {name: 'Cape Town', img: 'https://cdn.britannica.com/42/126842-050-0803BC41/Sea-Point-Cape-Town-SAf.jpg', country: countries[30], airport: 'CPT', price: 795.00},
    {name: 'Lagos', img: 'https://a.cdn-hotels.com/gdcs/production59/d859/35816b40-7c38-4bba-94b2-ba3454c6e906.jpg', country: countries[31], airport: 'LOS', price: 795.00},
    {name: 'Nairobi', img: 'https://www.tripsavvy.com/thmb/0-N1BPj6ui7nn-lNUgzDLpUbhzQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-707552273-55f522193bcf4f0b876496f52652cb36.jpg', country: countries[32], airport: 'NBO', price: 795.00},
  ]);


  console.log(items)

  process.exit();

})();