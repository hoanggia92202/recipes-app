import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const initRecipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [userInput, setUserInput] = useState({ ...initRecipe });

  const onChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      [event.target.id]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setRecipes([...recipes, userInput]);

    /* clear input field */
    setUserInput({ ...initRecipe });
  };

  return (
    <>
      <form name="create">
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name"></label>
                <input
                  onChange={(event) => onChangeHandler(event)}
                  type="text"
                  id="name"
                  name="name"
                  value={userInput.name}
                  placeholder="Name"
                />
              </td>
              <td>
                <label htmlFor="cuisine"></label>
                <input
                  onChange={(event) => onChangeHandler(event)}
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  value={userInput.cuisine}
                  placeholder="Cuisine"
                />
              </td>
              <td>
                <label htmlFor="photo"></label>
                <input
                  onChange={(event) => onChangeHandler(event)}
                  type="text"
                  id="photo"
                  name="photo"
                  value={userInput.photo}
                  placeholder="URL"
                />
              </td>
              <td>
                <label htmlFor="ingredients"></label>
                <textarea
                  onChange={(event) => onChangeHandler(event)}
                  id="ingredients"
                  name="ingredients"
                  value={userInput.ingredients}
                  placeholder="Ingredients"
                ></textarea>
              </td>
              <td>
                <label htmlFor="preparation"></label>
                <textarea
                  onChange={(event) => onChangeHandler(event)}
                  id="preparation"
                  name="preparation"
                  value={userInput.preparation}
                  placeholder="Preparation"
                ></textarea>
              </td>
              <td>
                <button onClick={(event) => submitHandler(event)} type="submit">
                  Create
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default RecipeCreate;
