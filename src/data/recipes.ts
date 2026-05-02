import type { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Gourmet Truffle Pasta',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/gourmet_pasta.png',
    time: '30 min',
    servings: 2,
    tags: ['Vegetarian', 'Quick'],
    rating: 4.8,
    ingredients: ['250g artisan linguine', '2 tbsp truffle oil', '1 cup wild mushrooms, sliced', '2 cloves garlic, minced', '1/2 cup heavy cream', '1/4 cup parmesan, freshly grated', 'Fresh parsley for garnish'],
    steps: ['Boil salted water and cook pasta according to package instructions until al dente.', 'In a large pan, sauté garlic and mushrooms in truffle oil until golden brown.', 'Pour in heavy cream and simmer until slightly thickened.', 'Toss pasta into the creamy mushroom sauce. Remove from heat.', 'Stir in parmesan cheese and garnish with freshly chopped parsley.']
  },
  {
    id: '2',
    title: 'Premium Avocado Toast',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/avocado_toast.png',
    time: '15 min',
    servings: 1,
    tags: ['Vegetarian', 'Quick'],
    rating: 4.9,
    ingredients: ['2 slices rustic sourdough bread', '1 ripe avocado', '1 large free-range egg', 'Thinly sliced radishes', 'Microgreens', 'Sea salt and cracked black pepper'],
    steps: ['Toast sourdough slices until crisp and golden.', 'Mash avocado with a pinch of sea salt and pepper in a small bowl.', 'Bring a pot of water to a gentle simmer. Swirl the water and drop the egg in to poach for 3 minutes.', 'Spread mashed avocado generously over the crisp toast.', 'Top with the poached egg, radish slices, and a vibrant handful of microgreens.']
  },
  {
    id: '3',
    title: 'Decadent Chocolate Lava Cake',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/chocolate_lava_cake.png',
    time: '25 min',
    servings: 2,
    tags: ['Dessert'],
    rating: 5.0,
    ingredients: ['1/2 cup premium dark chocolate chips', '1/4 cup unsalted butter', '2 large eggs', '1/4 cup granulated sugar', '2 tbsp all-purpose flour', 'Vanilla bean ice cream for serving'],
    steps: ['Preheat oven to 400°F (200°C) and grease two ramekins.', 'In a microwave or double boiler, melt chocolate chips and butter together until smooth.', 'In a separate bowl, whisk eggs and sugar until pale, then fold in the warm chocolate mixture.', 'Gently stir in the flour just until combined.', 'Pour batter evenly into ramekins and bake for exactly 12 minutes so the center remains gooey.', 'Invert onto plates and serve immediately with a scoop of vanilla bean ice cream.']
  },
  {
    id: '4',
    title: 'Vibrant Vegan Buddha Bowl',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/vegan_bowl.png',
    time: '45 min',
    servings: 4,
    tags: ['Vegetarian'],
    rating: 4.7,
    ingredients: ['1 cup quinoa, rinsed', '2 sweet potatoes, cubed', '1 can chickpeas, rinsed and dried', '1 ripe avocado, sliced', 'Crisp mixed greens', '1/4 cup tahini', '1 lemon, juiced'],
    steps: ['Preheat oven to 400°F (200°C). Toss sweet potatoes and chickpeas with olive oil and spices, then roast for 25 minutes.', 'Cook quinoa according to package directions until fluffy.', 'Whisk tahini, lemon juice, a splash of water, and salt to create a creamy dressing.', 'Divide greens and quinoa into serving bowls.', 'Arrange roasted sweet potatoes, crispy chickpeas, and avocado slices on top.', 'Drizzle generously with the green tahini dressing before serving.']
  },
  {
    id: '7',
    title: 'Butter Chicken',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/butter_chicken.png',
    emoji: '🍗',
    time: '45 mins',
    servings: 4,
    tags: ['Meat', 'Indian', 'Creamy'],
    rating: 4.8,
    ingredients: ['500g chicken', '1 cup yogurt', '2 tbsp butter', '1 cup tomato puree', '1 cup heavy cream', '2 tsp garam masala', '1 tsp turmeric', 'Salt to taste'],
    steps: ['Marinate chicken in yogurt and spices for 30 mins.', 'Cook chicken in butter until golden.', 'Add tomato puree and simmer 10 mins.', 'Stir in cream and cook 5 more mins.', 'Serve with naan or rice.']
  },
  {
    id: '8',
    title: 'Spaghetti Carbonara',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/spaghetti_carbonara.png',
    emoji: '🍝',
    time: '25 mins',
    servings: 2,
    tags: ['Meat', 'Italian', 'Quick'],
    rating: 4.6,
    ingredients: ['200g spaghetti', '100g bacon or pancetta', '2 eggs', '50g parmesan', '2 cloves garlic', 'Black pepper', 'Salt'],
    steps: ['Cook spaghetti until al dente.', 'Fry bacon with garlic until crispy.', 'Mix eggs and parmesan in a bowl.', 'Combine hot pasta with bacon, then pour egg mix.', 'Toss quickly off heat. Season with pepper and serve.']
  },
  {
    id: '9',
    title: 'Vegetable Stir Fry',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/vegetable_stir_fry.png',
    emoji: '🥦',
    time: '20 mins',
    servings: 3,
    tags: ['Vegetarian', 'Quick', 'Healthy'],
    rating: 4.5,
    ingredients: ['1 cup broccoli', '1 bell pepper', '1 carrot', '1 cup snap peas', '3 tbsp soy sauce', '1 tbsp sesame oil', '2 cloves garlic', '1 tsp ginger'],
    steps: ['Chop all vegetables uniformly.', 'Mix soy sauce, sesame oil, and ginger for sauce.', 'Stir fry vegetables in a hot wok starting with carrots.', 'Add garlic and sauce, toss for 2 mins.', 'Serve hot.']
  },
  {
    id: '11',
    title: 'Greek Salad',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/greek_salad.png',
    time: '10 mins',
    servings: 2,
    tags: ['Vegetarian', 'Greek', 'Quick'],
    rating: 4.7,
    ingredients: ['2 tomatoes', '1 cucumber', '1/2 red onion', '100g feta cheese', 'Handful olives', '3 tbsp olive oil', '1 tsp oregano', 'Salt and pepper'],
    steps: ['Chop tomatoes, cucumber, and onion into chunks.', 'Add olives and crumbled feta.', 'Drizzle with olive oil.', 'Sprinkle oregano, salt, and pepper.', 'Toss gently and serve fresh.']
  },
  {
    id: '12',
    title: 'Beef Tacos',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/beef_tacos.png',
    time: '30 mins',
    servings: 4,
    tags: ['Meat', 'Mexican', 'Spicy'],
    rating: 4.8,
    ingredients: ['500g ground beef', '8 taco shells', '1 onion', '2 tsp cumin', '1 tsp chili powder', '1 cup salsa', '1 cup shredded cheese', 'Sour cream', 'Lettuce'],
    steps: ['Cook onion in oil until soft.', 'Add beef and cook until browned.', 'Season with cumin and chili powder.', 'Fill taco shells with beef mix.', 'Top with salsa, cheese, sour cream, and lettuce.']
  },
  {
    id: '13',
    title: 'Mango Smoothie',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/mango_smoothie.png',
    time: '5 mins',
    servings: 1,
    tags: ['Vegetarian', 'Drink', 'Quick'],
    rating: 4.9,
    ingredients: ['1 ripe mango', '1/2 cup yogurt', '1/2 cup milk', '1 tbsp honey', 'Ice cubes'],
    steps: ['Peel and chop the mango.', 'Add all ingredients to a blender.', 'Blend until smooth.', 'Pour into a glass and serve cold.']
  },
  {
    id: '14',
    title: 'Garlic Butter Shrimp',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/garlic_butter_shrimp.png',
    time: '15 mins',
    servings: 2,
    tags: ['Meat', 'Seafood', 'Quick'],
    rating: 4.7,
    ingredients: ['300g shrimp peeled', '4 tbsp butter', '5 cloves garlic', 'Juice of 1 lemon', 'Fresh parsley', 'Salt and pepper'],
    steps: ['Melt butter in a pan over medium heat.', 'Add minced garlic and cook 1 min.', 'Add shrimp and cook 2 mins each side.', 'Squeeze lemon juice over shrimp.', 'Garnish with parsley and serve immediately.']
  },
  {
    id: '15',
    title: 'Banana Pancakes',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/banana_pancakes.png',
    time: '15 mins',
    servings: 2,
    tags: ['Dessert', 'Breakfast', 'Sweet'],
    rating: 4.8,
    ingredients: ['2 ripe bananas', '2 eggs', '1/2 cup flour', '1/2 tsp baking powder', 'Pinch of salt', 'Butter for frying', 'Maple syrup to serve'],
    steps: ['Mash bananas in a bowl.', 'Beat in eggs until combined.', 'Stir in flour, baking powder, and salt.', 'Heat butter in a pan, pour small rounds of batter.', 'Cook 2 mins each side. Serve with maple syrup.']
  },
  {
    id: '16',
    title: 'Tomato Basil Pasta',
      image: '/imemeegoda.github.io-Culinary-Canvas_Recipes--/assets/tomato_basil_pasta.png',
    time: '20 mins',
    servings: 2,
    tags: ['Vegetarian', 'Italian', 'Fresh'],
    rating: 4.6,
    ingredients: ['200g pasta', '3 ripe tomatoes', '3 cloves garlic', 'Fresh basil leaves', '3 tbsp olive oil', 'Salt and pepper', 'Parmesan to serve'],
    steps: ['Cook pasta according to package directions.', 'Sauté garlic in olive oil 1 min.', 'Add chopped tomatoes and cook 8 mins.', 'Season with salt and pepper.', 'Toss with pasta, top with basil and parmesan.']
  }
];
