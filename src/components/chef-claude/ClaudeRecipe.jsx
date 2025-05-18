import React from 'react'

const ClaudeRecipe = () => {

  return (
    <div>
      <section style={{ marginTop: "40px" }}>
        <h2>Chef claude recommends:</h2>
        <article className='suggested-recipe-container'>
          <p>Based on the ingredients you have available, I would recommend delicious 
            <strong> Beef bolognese Pasta</strong>. Here is the recipe .
          </p>
          <h3>Beef Bolognese Pasta</h3>
          <strong>Ingredients:</strong>
          <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
          </ul>
          <strong>Instructions:</strong>
          <ol>
            <li>Bring a large port of salted water to a boil for the pasta</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, untill browned and cooked throught, about 5-7 minutes.</li>
          </ol>
        </article>
      </section>
    </div>
  )
}

export default ClaudeRecipe
