import Button from '../Button';
import Description from '../Description';
import Title from '../Title';
import chef from '../../assets/images/chef.jpg';

function About() {
	return (
		<div>
			<div
				style={{
					backgroundColor: '#C98A40',
					width: 'calc(100% * 2/3)',
					padding: '50px 300px',
					position: 'relative',
				}}
			>
				<div>
					<Title>
						about <br /> us
					</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
						doloremque nulla rerum! Excepturi distinctio, provident, magnam iure
						explicabo, cumque vel ut quasi rerum quis ab? Voluptatem temporibus
						deserunt mollitia quam, et eum facilis non repudiandae dolorem
						animi? Perferendis vel iure, inventore animi ea vitae eligendi
						tenetur in architecto repudiandae dignissimos!
					</Description>
					<Button>contact us</Button>
					<img
						src={chef}
						alt='chef'
						style={{
							borderRadius: '10px',
							width: '500px',
							position: 'absolute',
							top: '120px',
							left: '85%',
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
