import React, { useState } from 'react';



const Page = () => {
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
  const [favIndex, setFavIndex] = useState(0);
  const [message, setMessage] = useState('');

  const allFavoriteThings = ["Egusi", "Egburuegbu", "Mango", "Guava", "Pineapple", "Ujiri"];

  // function addFavoriteThing () {
  //   if (favIndex <= allFavoriteThings.length - 1) {

  //     const newFav = allFavoriteThings[favIndex];
  //     setMyFavoriteThings(prev => [...prev, newFav]);

  //     setMessage('')

  //     setFavIndex(prev => prev + 1);
  //   } else{
  //     setMessage("All items added!");
  //     setTimeout(() => {
  //       setMessage("");
  //     }, 3000);
  //   }
    
  // }

  function addFavoriteThing () {
    setMyFavoriteThings(prev => {
      if (prev.length <= allFavoriteThings.length - 1) {

        return [...prev, allFavoriteThings[prev.length]]
      }

      return [...prev]
    })
  }


  const thingsElement = myFavoriteThings.map((thing, index) => (
    <p key={index}>{index + 1}. {thing}</p>
  ))

  return (
    <div>
      <button onClick={addFavoriteThing}>Add Item {myFavoriteThings.length}</button>
        {thingsElement}

        <p style={{ color: "red" }}>{message}</p>
    </div>
  )
}

export default Page
