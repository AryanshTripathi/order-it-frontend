import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
	const { user, loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-orange-500" />
			</SheetTrigger>
			<SheetContent className="space-y-3 w-[240px]">
				<SheetTitle>
					{isAuthenticated ? (
						<span className="flex items-center font-bold gap-2">
							<CircleUserRound className="text-orange-500" />
							{user?.given_name}
						</span>
					) : (
						<span>Welcome to OrderIt</span>
					)}
				</SheetTitle>
				<Separator />
				<SheetDescription className="flex flex-col gap-4">
					{isAuthenticated ? (
						<MobileNavLinks />
					) : (
						<Button
							onClick={async () => await loginWithRedirect()}
							className="flex-1 font-bold bg-orange-500">
							Log In
						</Button>
					)}
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
