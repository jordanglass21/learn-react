/**
 * A list of recipe objects.
 * Each recipe contains an id, name, and a Set of ingredients.
 * @typedef {Object} Recipe
 * @property {string} id - The unique identifier for the recipe.
 * @property {string} name - The name of the recipe.
 * @property {Set<string>} ingredients - A Set of ingredients used in the recipe.
 * 
 * @type {Recipe[]}
 */
export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

/**
 * Component that lists all recipes and their ingredients.
 * @returns {JSX.Element} The JSX element displaying the list of recipes.
 */
export default function RecipeList() {
  const listItems = recipes.map(recipe =>
    <li key={recipe.id}>
      <h3>{recipe.name}</h3>
      <IngredientList ingredients={recipe.ingredients} />
    </li>
   )
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

/**
 * Component that displays a list of ingredients as a comma-separated string.
 * @param {Object} props - The component props.
 * @param {Set<string>} props.ingredients - A Set of ingredients for the recipe.
 * @returns {JSX.Element} The JSX element displaying the ingredients.
 */
function IngredientList({ ingredients }: { ingredients: Set<string> }) {
  return <p>{Array.from(ingredients).join(', ')}</p>;
}