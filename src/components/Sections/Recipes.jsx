import { useState, useEffect } from 'react';
import Recipe from '../Recipe';
import Title from '../Title';
import Button from '../Button';

function Recipes() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const getRecipes = async () => {
			try {
				const res = await fetch(
					'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast'
				);
				if (!res.ok) throw new Error('Failed to fetch');
				const data = await res.json();
				setRecipes(data.meals);
			} catch (error) {
				console.log(error);
			}
		};

		getRecipes();
	}, []);

	const recipesList = recipes.map((recipe) => (
		<Recipe key={recipe.idMeal} meal={recipe} />
	));

	return (
		<div>
			<Title style={{ textAlign: 'center', color: '#C98A40' }}>Recipes</Title>
			<div className='recipes-container'>{recipesList}</div>

			<Button
				style={{
					marginInline: 'auto',
					marginBlock: '50px',
					marginBottom: '50px',
				}}
			>
				contact us
			</Button>
		</div>
	);
}

export default Recipes;
