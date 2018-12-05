import styled from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';

const Container = styled.div`
	margin: 0;
	padding-bottom: 60px;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 40rem;
	margin: 4rem;
`;

const MainImage = styled.img`
	height: 50%;
	width: 40%;
	-webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    -ms-transition: opacity 1s ease-in-out;    
    transition: opacity 1s ease-in-out;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column
	align-items: center;
`;

const Title = styled.p`
	font-size: 24px;
`;

const images = ["/static/prague.jpg", "/static/prague2.jpg",
	"/static/castlebay.jpg", "/static/edinburgh.jpeg"];

class App extends React.Component {
	componentWillMount() {
		this.setState({
			imageIndex: 0,
		});
		setInterval(() => {
			if (this.state.imageIndex >= images.length - 1) {
				this.setState({
					imageIndex: 0,
				});
			} else {
				this.setState({
					imageIndex: this.state.imageIndex + 1,
				});
			}
		}, 5000);
	}
	render() {
		return (
			<Container>
				<Header/>
				<TitleContainer>
					<Title>Textiles, Drawings, and More</Title>
				</TitleContainer>
				<ImageContainer>
					<MainImage src={images[this.state.imageIndex]} />
				</ImageContainer>
				<Footer/>
			</Container>
		);
	}
}

export default App;