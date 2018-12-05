import Slider from "react-slick";
import styled from 'styled-components';
import Header from '../components/header';

const Container = styled.div`
	margin: 0;
`;

const ImagesContainer = styled.div`
	heigh: 50%;
	margin: 2rem;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 2rem;
`;

const TextileImage = styled.img`
	height: 150px;
	width: 150px;
`;

const TextileContainer = styled.p`
	display: flex;
	flex-direction: column;
`;

const TextileTitle = styled.p`
	color: black;
	font-size: 24px;
	margin-left: 2rem;
`;

const TextileDescription = styled.p`
	color: black;
	font-size: 20px;
	margin-left: 2rem;
	font-family: 'Open Sans'
`;

const images = [
	{
		path: "/static/edinburgh.jpeg",
		title: "Edinburgh",
	},
	{
		path: "/static/castlebay.jpg",
		title: "Castlebay",
	},
	{
		path:"/static/prague.jpg",
		title: "Prague",
	}
];

const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
  };


/*
				<Carousel showThumbs={false}>
					<TextileImage src={image.path}></TextileImage>
					<TextileImage src={image.path}></TextileImage>
					<TextileImage src={image.path}></TextileImage>
				</Carousel>
				<TextileContainer>
					<TextileTitle>{image.title}</TextileTitle>
				</TextileContainer>
			</ImageContainer>)}
*/

const App = () => (
	<Container>
		<Header/>
		<Slider {...sliderSettings}>
			<ImageContainer>
				<TextileImage src={images[0].path} />
				<p className={images[0].title}></p>
			</ImageContainer>
			<ImageContainer>
				<TextileImage src={images[1].path} />
				<p className={images[1].title}></p>
			</ImageContainer>
			<ImageContainer>
				<TextileImage src={images[2].path} />
				<p className={images[2].title}></p>
			</ImageContainer>
		</Slider>
	</Container>
);

export default App;