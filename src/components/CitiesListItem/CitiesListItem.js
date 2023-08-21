import React, { useState } from 'react';

import styles from './CitiesListItem.module.scss';

export default function CitiesListItem({ 
	menuItem,
	handleAddToOrder,
	handleDepartureAirport,
	handleArrivalAirport
}) {
  const [isDepartureBtnDisabled, setIsDepartureBtnDisabled] = useState(false)
  const [isArrivalBtnDisabled, setIsArrivalBtnDisabled] = useState(false)

  const handleDepartureBtnClick = () => {
    handleAddToOrder(menuItem._id)
    setIsDepartureBtnDisabled(true)
    //setDeparture(menuItem.airport)
    //showdeparture times
  }
  const handleArrivalBtnClick = () => {
    handleAddToOrder(menuItem._id)
    setIsArrivalBtnDisabled(true)
  }
  
  /*const [disabledBtns, setDisabledBtns] = useState(false)

  const handleDepartureBtnsClick = () => {
    handleAddToOrder(menuItem._id)
    setDisabledBtns(true)
  }*/

	return (
		<div className={styles.CitiesListItem}>
			<div className={styles.img + ' ' + 'flex-ctr-ctr'}>
				<img className={styles.img} src={menuItem.img} />
			</div>
			<div className={styles.name}>{menuItem.name}</div>
			<div className={styles.buy}>
				<span>${menuItem.price.toFixed(2)}</span>
				<button
					className="btn-sm"
					onClick={handleDepartureBtnClick}
          disabled={isDepartureBtnDisabled}
				>
					DEPARTURE
				</button>
        {/*map departure times here*/}
				<button
					className="btn-sm"
					onClick={handleArrivalBtnClick}
          disabled={isArrivalBtnDisabled}
				>
					ARRIVAL
				</button>
			</div>
		</div>
	);
}

// const handleDepartureBtnClick = async(departureAirport,
//   arrivalAirport,
//   departureDate,
//   arrivalDate,
//   cabinClass) => {
//   handleAddToOrder(menuItem._id)
//   setIsDepartureBtnDisabled(true)
//   try{
//     const departureData = await itemsAPI.getRoundFlights(departureAirport,
//       arrivalAirport,
//       departureDate,
//       arrivalDate,
//       cabinClass)
//     setDepartures(departureData)
//   } catch (e) {
//     console.error(e)
//   }
// }