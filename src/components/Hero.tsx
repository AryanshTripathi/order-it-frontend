import heroImage from "../assets/images/hero.png";

const Hero = () => {
	return (
		<img
			src={heroImage}
			alt="hero"
			className="w-full max-h-[600px] object-cover "
		/>
	);
};

export default Hero;
