import styles from '../App.module.css';

export const RegisterFormLayout = ({ formData, errors, onChange, onSubmit, ...props }) => {
    return (
			<form onSubmit={onSubmit}>{errors && <div className={styles.errors}>{errors}</div>}
				<input
					name="email"
					type="email"
					placeholder="Почта"
					value={formData.email}
					onChange={({ target }) => setFormData({
						...formData,
						email: target.value,
					})}
					error={''}
				></input>
				<input
					name="password"
					type="password"
					placeholder="Пароль"
					value={formData.password}
					onChange={({ target }) => setFormData({
						...formData,
						password: target.value,
					})}
					error={''}
				></input>
				<input
					name="repeatPassword"
					type="password"
					placeholder="Повторите пароль"
					value={formData.repeatPassword}
					onChange={({ target }) => setFormData({
						...formData,
						repeatPassword: target.value,
					})}
					error={''}
				></input>
				<button type="submit">Зарегистрироваться</button>
			</form>
		);
	};
