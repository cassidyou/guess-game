import React from 'react'

const IngredientsList = (props) => {
  return (
    <section>
          <h3>Ingredients on hand: </h3>
          <br />
          <ul className="ingredients-list-items">{props.ingredientsList}</ul>
          {props.ingredientsList.length > 3 && (
            <div className="get-recipe-container">
            <div>
              <h4>Ready for a recipe?</h4>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={() => props.setRecipeshown(!props.recipeShown)}>Get a recipe</button>
          </div>)}
        </section>
  )
}

export default IngredientsList
