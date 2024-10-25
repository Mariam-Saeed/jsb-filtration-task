import CardDesc from './CardDesc';
import CardTitle from './CardTitle';
import Star from './Star';

function Testymonial({ name, description }) {
	return (
		<div className='testymonial'>
			<CardTitle text={name} />
			<CardDesc text={description} />
			<div style={{ marginTop: '20px' }}>
				<Star />
				<Star />
				<Star />
				<Star />
				<Star />
			</div>
		</div>
	);
}

export default Testymonial;
