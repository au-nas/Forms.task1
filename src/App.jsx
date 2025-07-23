import { useState } from 'react';

export const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	return (
		<form>
			<input
				name="email"
				type="email"
				placeholder="Почта"
				value={email}
				onChange={({ target }) => setEmail(target.value)}
			></input>
			<input
				name="password"
				type="password"
				placeholder="Пароль"
				value={password}
				onChange={({ target }) => setPassword(target.value)}
			></input>
			<input
				name="repeatPassword"
				type="password"
				placeholder="Повторите пароль"
				value={repeatPassword}
				onChange={({ target }) => setRepeatPassword(target.value)}
			></input>
			<button type="submit">Зарегистрироваться</button>
		</form>
	);
};
