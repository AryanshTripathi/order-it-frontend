import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<div className="border-b-2 border-b-orange-500 py-6">
			<div className="container ,x-auto flex justify-between items-center">
				<Link
					className="text-3xl font-bold tracking-tight text-orange-500"
					to="/">
					OrderIt!
				</Link>

				<div className="md:hidden">
					<MobileNav />
				</div>
				<div className="hidden md:block">
					<Navbar />
				</div>
			</div>
		</div>
	);
};

export default Header;
