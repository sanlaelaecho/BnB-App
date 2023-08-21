import React, { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './CitiesPage.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import CitiesList from '../../components/CitiesList/CitiesList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';

export default function CitiesPage({ user, setUser }) {
  const [selectedDates, setSelectedDates] = useState({ departureDate: null, arrivalDate: null })
  const [menuItems, setMenuItems] = useState([]);
  const [departureAirport, setDepartureAirport] = useState('')
  const [arrivalAirport, setArrivalAirport] = useState('')
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(function() {
     async function getCities() {
      const cities = await itemsAPI.getCountryCities(params.countryId);
      setMenuItems(cities);
    }
    getCities()
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*-- Event Handlers --*/
  async function handleDatesChange({ departureDate, arrivalDate }) {
    /*     const dYear = departureDate.getFullYear()
    const dMonth = departureDate.getMonth()
    const dDay = departureDate.getDate()
    let departureDateFormat = `${dYear}-${dMonth}-${dDay}`
    const aYear = arrivalDate.getFullYear()
    const aMonth = arrivalDate.getMonth()
    const aDay = arrivalDate.getDate()
    let arrivalDateFormat = `${aYear}-${aMonth}-${aDay}` */
    setSelectedDates({ departureDate, arrivalDate })
  console.log(selectedDates)
  } 
  
  async function handleDepartureAirport(itemDepartAirport) {
    setDepartureAirport(itemDepartAirport)
  } 
  
  async function handleArrivalAirport(itemAirport) {
    setArrivalAirport(itemAirport)
   /* const roundFlights = await itemsAPI.getRoundFlights(departureAirport,
	arrivalAirport,
  departureDate,
  arrivalDate) */
  }

  
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className={styles.CitiesPage}>
      <aside>
        <Logo />
        <DateRangePicker
          selectedDates={[selectedDates]}
          handleDatesChange={handleDatesChange}
        />
        <Link to="/orders/new" className="button btn-sm">BACK TO COUNTRIES</Link>
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <CitiesList
        menuItems={menuItems}
        handleAddToOrder={handleAddToOrder}
        handleDepartureAirport={handleDepartureAirport}
        handleArrivalAirport={handleArrivalAirport}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  )
}