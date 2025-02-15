import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		<div>
			<span className="flex space-x-2 items-center">
				{isAuthenticated ? (
					<UsernameMenu />
				) : (
					<Button
						variant="outline"
						className="font-bold border-orange-500 hover:border-black hover:text-orange-500 hover:shadow-xl active:shadow-sm hover:bg-white"
						onClick={async () => await loginWithRedirect()}>
						Log In
					</Button>
				)}
			</span>
		</div>
	);
};

export default Navbar;
