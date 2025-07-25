import { useState, useRef } from 'react';
import { RegisterFormLayout } from './RegisterFormLayout';

const sendData = (formData) => {
	console.log(formData);
};

export const RegisterForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		repeatPassword: '',
	});

	const [errors, setErrors] = useState({});
	const submitButtonRef = useRef(null);

	const emailRegularEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const validateForm = (data) => {
		const newErrors = {};

		if (!emailRegularEx.test(data.email)) {
			newErrors.email = 'Неверный формат почты';
		}

		if (data.password.length < 3) {
			newErrors.password =
				'Слишком легкий пароль. Должно быть не меньше 3 символов';
		}

		if (data.password !== data.repeatPassword) {
			newErrors.repeatPassword = 'Пароли не совпадают';
		}

		return newErrors;
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const newErrors = validateForm(formData);

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setErrors({});

		if (submitButtonRef.current) {
			submitButtonRef.current.focus();
		}

		sendData(formData);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData((prevFormData) => {
			const updatedFormData = {
				...prevFormData,
				[name]: value,
			};

			const newErrors = validateForm(updatedFormData);
			setErrors(newErrors);

			return updatedFormData;
		});
	};

	const isFormValid =
		Object.keys(errors).length === 0 &&
		formData.email !== '' &&
		formData.password !== '' &&
		formData.repeatPassword !== '';

	return (
		<RegisterFormLayout
			formData={formData}
			setFormData={setFormData}
			errors={errors}
			onSubmit={onSubmit}
			onChange={handleChange}
			isFormValid={isFormValid}
			submitButtonRef={submitButtonRef}
		/>
	);
};
