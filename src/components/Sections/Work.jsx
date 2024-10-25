import Title from '../Title';
import Button from '../Button';
import one from '../../assets/images/one.jpg';
import two from '../../assets/images/two.jpg';
import three from '../../assets/images/three.jpg';
import four from '../../assets/images/four.jpg';
import Description from '../Description';

function Work() {
	return (
		<div
			style={{ display: 'flex', position: 'relative', height: '100vh' }}
			className='work-section'
		>
			<div className='work-cont1'>
				<Description
					style={{
						color: '#C98A40',
						marginLeft: '150px',
						width: '70%',
						marginTop: '170px',
					}}
				>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sit
					reiciendis possimus ut velit, ea tempore harum expedita quod odio.
				</Description>
			</div>
			<div
				style={{
					backgroundColor: '#C98A40',
					width: 'calc(100% * 2/3)',
				}}
			>
				<Title
					style={{
						marginTop: '30px',
						textAlign: 'right',
						textTransform: 'capitalize',
						position: 'absolute',
						right: '300px',
						display: 'block',
					}}
				>
					how we <br /> work
				</Title>

				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						width: '80%',
						margin: 'auto',
						justifyContent: 'center',
						gap: '30px',
						position: 'absolute',
						left: '155px',
						top: '415px',
					}}
				>
					<img
						style={{ width: '20%', borderRadius: '10px' }}
						src={one}
						alt=''
					/>
					<img
						style={{ width: '20%', borderRadius: '10px' }}
						src={two}
						alt=''
					/>
					<img
						style={{ width: '20%', borderRadius: '10px' }}
						src={three}
						alt=''
					/>
					<img
						style={{ width: '20%', borderRadius: '10px' }}
						src={four}
						alt=''
					/>
				</div>
				<Button style={{ position: 'absolute', bottom: '10px', left: '50%' }}>
					contact us
				</Button>
			</div>
		</div>
	);
}

export default Work;
