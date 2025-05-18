import React, { useState } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';


const Main = () => {

  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeshown] = useState(false);



  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredientsArray = formData.get("ingredient").split(",").filter(item => {
      item.trim();
      return item != ""
    });


    if (newIngredientsArray.length > 0) {
      
      newIngredientsArray.map(ingredient => {
        setIngredients(prev => [...prev, ingredient])
        
      })
    }
    
  }



    


  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input 
            type="text" 
            aria-label='Add ingredients'
            placeholder='e.g Oregana'
            name="ingredient"
        />

        <button>Add Ingredient</button>

      </form>
      <br /><br />
      {ingredientsList.length > 0 && (
        <IngredientsList 
          ingredientsList={ingredientsList} 
          setRecipeshown={setRecipeshown}
          recipeShown={recipeShown}
         />
        )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  )
}

export default Main
