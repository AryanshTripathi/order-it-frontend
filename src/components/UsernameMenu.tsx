import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
	const { logout } = useAuth0();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
				<CircleUserRound className="text-orange-600 w-10 h-10" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Link to="/order-status" className="font-bold hover:text-orange-500">
						Order Status
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link
						to="/manage-restaurant"
						className="font-bold hover:text-orange-500 my-1">
						Manage Restaurant
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link
						to="/user-profile"
						className="font-bold hover:text-orange-500 my-1">
						User Profile
					</Link>
				</DropdownMenuItem>
				<Separator />
				<div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none ">
					<Button
						variant="outline"
						onClick={() => logout()}
						className="mt-1 flex flex-grow justify-center items-center font-bold border-orange-500 hover:border-black hover:shadow-lg hover:text-orange-500 hover:bg-white active:shadow-sm">
						Log out
					</Button>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UsernameMenu;
