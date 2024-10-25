import Form from '../Form';
import Title from '../Title';
import call from '../../assets/icons/call.png';
import mail from '../../assets/icons/mail.png';

function Contact() {
	return (
		<div>
			<Title style={{ color: '#C98A40', textAlign: 'center' }}>
				contact us
			</Title>
			<div
				style={{
					width: '50%',
					margin: 'auto',
					marginBottom: '50px',
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<Form />
				<div style={{ marginTop: '70px' }}>
					<div style={{ marginBottom: '30px' }}>
						<img className='contact-icon' src={mail} alt='mail-icon' />
						<span className='contact-details'>
							upskilling.eg1
							<span style={{ textDecoration: 'underline' }}>@gmail.com</span>
						</span>
					</div>
					<div>
						<img className='contact-icon' src={call} alt='call-icon' />
						<span className='contact-details'>+20 115 493 2137</span>
					</div>
				</div>
			</div>
			<div className='footer'></div>
		</div>
	);
}

export default Contact;
