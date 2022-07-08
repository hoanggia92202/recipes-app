import React from "react";

function RecipeList({ recipes, setRecipes }) {
  const deleteRecipe = (item) => {
    const updateRecipes = recipes.filter((recipe) => item.name !== recipe.name);
    setRecipes([...updateRecipes]);
  };

  const recipeList = recipes.map((item, index) => {
    return (
      <>
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.cuisine}</td>
          <td>
            <img src={item.photo} alt="food" />
          </td>
          <td className="content_td">
            <p>{item.ingredients}</p>
          </td>
          <td className="content_td">
            <p>{item.preparation}</p>
          </td>
          <td>
            <button onClick={() => deleteRecipe(item)} name="delete">
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation prep</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
