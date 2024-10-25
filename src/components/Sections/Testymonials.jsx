import Button from '../Button';
import Testymonial from '../Testymonial';
import Title from '../Title';

function Testymonials() {
	const testymonialsData = [
		{
			id: '1',
			name: 'Kathryn Murphy',
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
		},
		{
			id: '2',
			name: 'Kathryn Murphy',
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
		},
		{
			id: '3',
			name: 'Kathryn Murphy',
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
		},
		{
			id: '4',
			name: 'Kathryn Murphy',
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
		},
	];

	const testymonialsList = testymonialsData.map((test) => (
		<Testymonial
			key={test.id}
			name={test.name}
			description={test.description}
		/>
	));
	return (
		<div className='testymonials'>
			<Title style={{ textAlign: 'center' }}>testymonials</Title>
			<div className='testymonials-container'>{testymonialsList}</div>
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

export default Testymonials;
