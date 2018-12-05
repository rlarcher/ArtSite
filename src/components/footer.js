import styled from 'styled-components';

const FooterContainer = styled.div`
	background-color: #E6E6FA;
	height: 5rem;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

const Footer = () => (
	<FooterContainer>
		<p>Rachel Nafis Designs</p>
	</FooterContainer>
);

export default Footer;