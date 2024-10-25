import CardDesc from './CardDesc';
import CardTitle from './CardTitle';

function Recipe({ meal }) {
	const { strMeal, strMealThumb } = meal;
	return (
		<div className='recipe'>
			<img className='recipe-photo' src={strMealThumb} alt='meal photo' />
			<div style={{ padding: '20px' }}>
				<CardTitle text={strMeal} />
				<CardDesc
					text={
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
					}
				/>
			</div>
		</div>
	);
}

export default Recipe;
