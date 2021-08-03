import { Formik } from 'formik';
import React from 'react';
// import { Alert } from 'react-native';
import LoginForm from './LoginForm';
import * as yup from 'yup';
const InitialState = {
	username: '',
	password: '',
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(2, 'Too Short')
		.max(10, 'Too Long')
		.required('Username Is Required'),
	password: yup
		.string()
		.min(2, 'Too Short')
		.max(10, 'Too Long')
		.required('Password Is Required'),
});

const LoginPage = () => {
	const onSubmit = (values) => {
		const username = values.username;
		const password = values.password;
		console.log(username, password, 'damn');
		// if (!isNaN(mass) && !isNaN(height) && height !== 0) {
		// 	const index = mass / Math.pow(height, 2);

		// 	Alert.alert(`Your body mass index is: ${index}`);
		// }
	};
	return (
		<Formik
			initialValues={InitialState}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default LoginPage;
