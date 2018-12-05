import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #E6E6FA;
	height: 4rem;
	margin: 0;
	padding: 0;
`;

const HeaderText = styled.p`
	font-size: 16px;
	margin-left: 1rem;
`;

const VerticalLine = styled.div`
	width: 2px;
	margin-left: 1rem;
	background-color: white;
	height: 100%;
`;

const pages = ['drawings', 'textiles', 'about'];

const StyledLinkText = styled.div`
	margin-left: 2rem;
`;

const StyledLink = styled.a`
	color: #3e5264;
`;

const Header = () => (
	<HeaderContainer>
		<HeaderText>Rachel Nafis Designs</HeaderText>
		<VerticalLine/>
		{pages.map((page, index) => (
			<StyledLinkText key={index}>
				<Link href={`/${page}`}>
					<StyledLink>{page}</StyledLink>
				</Link>
			</StyledLinkText>
		))}
	</HeaderContainer>
)

export default Header;
