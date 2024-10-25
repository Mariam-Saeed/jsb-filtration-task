import { useState } from 'react';
import Button from './Button';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [phoneNumberError, setPhoneNumberError] = useState('');
	const [feedback, setFeedback] = useState('');
	const color =
		feedback === 'Something went wrong plz try again' ? 'red' : 'green';

	const handleChange = (e, setFunction) => {
		setFunction(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const settings = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				phone: phoneNumber,
			}),
		};
		try {
			const res = await fetch(
				'http://upskilling-egypt.com:3001/contact',
				settings
			);
			if (!res?.ok) {
				throw new Error('Failed to fetch');
			}
			const data = await res.json();
			console.log(data);
			if (data.message === 'Email sent successfully') {
				setFeedback('Email sent successfully');
				setEmailError('');
				setNameError('');
				setPhoneNumberError('');
			} else {
				setFeedback('Something went wrong plz try again');
				for (let error of data.errors) {
					if (error.path === 'name') setNameError(error.msg);
					else if (error.path === 'email') setEmailError(error.msg);
					else setPhoneNumberError(error.msg);
				}
			}
		} catch (error) {
			setFeedback('Something went wrong plz try again');
			console.log(error);
		}
	};
	return (
		<form className='form' onSubmit={handleSubmit}>
			<input
				required
				className='form-input'
				type='text'
				value={name}
				placeholder='Full Name'
				onChange={(e) => handleChange(e, setName)}
			/>
			<p className='error'>{nameError}</p>
			<input
				required
				className='form-input'
				type='email'
				value={email}
				placeholder='Email'
				onChange={(e) => handleChange(e, setEmail)}
			/>
			<p className='error'>{emailError}</p>
			<input
				required
				className='form-input'
				type='tel'
				value={phoneNumber}
				placeholder='Phone Number'
				onChange={(e) => handleChange(e, setPhoneNumber)}
			/>
			<p className='error'>{phoneNumberError}</p>
			<Button
				style={{
					border: '3px #C98A40 solid',
					background: 'transparent',
					color: 'black',
					margin: 'auto',
					width: '40%',
				}}
			>
				send
			</Button>
			<p className='feedback' style={{ color: color }}>
				{feedback}
			</p>
		</form>
	);
}

export default Form;
