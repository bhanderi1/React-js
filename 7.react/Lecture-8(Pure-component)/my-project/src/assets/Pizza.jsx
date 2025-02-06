import React from 'react';

let spoon = 1
export const PizzaRecipe = () => {
  return (
    <div>
      <ol>
        <li>Preheat your oven to 425°F (220°C).</li>
        <li>Roll out the {spoon} pizza dough
         pizza dough on a floured surface to your desired thickness.</li>
        <li>Spread {spoon / 2} cup pizza sauce evenly over the dough.</li>
        <li>Sprinkle {spoon}cup shredded mozzarella cheese and grated Parmesan cheese over the sauce.</li>
        <li>{spoon /4} cup grated Parmesan cheese</li>
        <li>{spoon /4}  Arrange pepperoni, mushrooms, bell peppers, onions, and olives on top of the cheese.</li>
        <li>Sprinkle {spoon} teaspoon dried oregano over the toppings.</li>
        <li>Sprinkle {spoon /2} teaspoon garlic powder over the toppings.</li>
        <li>Bake in the preheated oven for 12-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly.</li>
        <li>Remove from the oven, let it cool for a few minutes, then slice and serve.</li>
      </ol>
    </div>
  )
}

const Pizza = () => {
  return (
      <div>
          <h1>Pizza</h1>
          <PizzaRecipe/>
      </div>
  )
}
export default Pizza;
