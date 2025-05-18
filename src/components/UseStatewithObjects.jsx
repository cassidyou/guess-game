import React, { useState } from 'react'

const UseStatewithObjects = () => {
    const fav = {
        padding: "10px 30px",
        background: "green",
        color: "white",
        border: "none",
        outline: "none",
        borderRadius: "8px"
    }

    const noFav = {
        padding: "10px 30px",
        background: "black",
        color: "white",
        border: "none",
        outline: "none",
        borderRadius: "8px"
    }

    const [contact, setContact] = useState({
        firstName: "Oluchi", 
        lastName: "Cassidy",
        phone: "+245 78547 554",
        email: "cassidy@gmail.com",
        isFavorite: true
    });

    function toggleFavorite () {
        setContact(prevContact => ({...prevContact, isFavorite: !contact.isFavorite}))
    }

  return (
    <div>
      <p><b>Name</b>: {contact.firstName} {contact.lastName}</p>
      <p><b>Phone</b>: {contact.phone} </p>
      <p><b>Email</b>: {contact.email} </p>
      <span><b>Is this your favorite</b>:</span>  &nbsp;
      <button onClick={toggleFavorite} style={contact.isFavorite ? fav: noFav}>{contact.isFavorite ? 'Yes' : 'No' }</button>
    </div>
  )
}

export default UseStatewithObjects
