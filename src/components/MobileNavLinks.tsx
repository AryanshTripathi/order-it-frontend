import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
	const { logout } = useAuth0();
	return (
		<>
			<Link
				to="/order-status"
				className="flex bg-white items-center font-bold hover:text-orange-500">
				Order Status
			</Link>
			<Link
				to="/order-status"
				className="flex bg-white items-center font-bold hover:text-orange-500">
				Manage Restaurant
			</Link>
			<Link
				className="flex bg-white items-center font-bold hover:text-orange-500"
				to="/user-profile">
				User Profile
			</Link>
			<Button
				onClick={() => logout()}
				className="flex items-center font-bold hover:bg-gray-500">
				Log Out
			</Button>
		</>
	);
};

export default MobileNavLinks;
