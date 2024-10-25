import Button from '../Button';
import Title from '../Title';
import Description from '../Description';
import breads from '../../assets/images/breads.png';
import twitter from '../../assets/icons/twitter.png';
import fb from '../../assets/icons/fb.png';
import insta from '../../assets/icons/insta.png';
import vk from '../../assets/icons/vk.png';

function Main() {
	return (
		<section className='main-section'>
			<div style={{ backgroundColor: '#C98A40', width: 'calc(100% * 2/3)' }}>
				<h1>
					Peachy Pup
					<br />
					Bakery
				</h1>
				<div style={{ marginLeft: '200px' }}>
					<Title style={{ fontSize: '74px' }}>Tasty pastries</Title>
					<Description style={{ width: '70%' }}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quis
						rerum repellat tempore quod eligendi laborum quas obcaecati modi
						eius.
					</Description>
					<Button style={{ marginBottom: '50px' }}>see more</Button>
				</div>
				<div style={{ display: 'flex' }}>
					<div className='main-cont3' style={{ backgroundColor: 'white' }}>
						<div
							style={{
								width: '10%',
								margin: '30px',
								marginLeft: 'auto',
								display: 'flex',
								flexWrap: 'wrap',
								gap: '16px',
							}}
						>
							<img src={vk} alt='icon' />
							<img src={fb} alt='icon' />
							<img src={insta} alt='icon' />
							<img src={twitter} alt='icon' />
						</div>
					</div>
					<div style={{ width: '100% * 3/4', display: 'flex' }}>
						<p className='tel'>
							Telephone:
							<span style={{ fontWeight: '500', marginLeft: '14px' }}>
								+7 700 000 00 00
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className='main-cont2'></div>

			<img
				style={{
					position: 'absolute',
					top: '250px',
					right: '100px',
				}}
				src={breads}
				alt='breads'
			/>
		</section>
	);
}

export default Main;
