import { MenuItem as MenuItemType } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
	menuItem: MenuItemType;
	addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
	return (
		<Card
			className="cursor-pointer hover:border-orange-500 hover:shadow-xl active:shadow-sm"
			onClick={addToCart}>
			<CardHeader>
				<CardTitle>{menuItem.name}</CardTitle>
			</CardHeader>
			<CardContent className="font-bold">₹{menuItem.price}</CardContent>
		</Card>
	);
};

export default MenuItem;
