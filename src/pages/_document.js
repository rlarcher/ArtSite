import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
	static getInitialProps({ renderPage, req }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		const props = { ...page, styleTags };
		return {
			...props,
		};
	}

	render() {
		return (
		<html>
			<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			<Head>
				<title>Rachel Nafis Designs</title>
			</Head>
			<body style={ { margin: 0 } }>
				<Main />
				<NextScript />
			</body>
		</html>
		);
	}
}