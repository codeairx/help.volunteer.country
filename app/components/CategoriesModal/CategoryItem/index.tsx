import { useState, Dispatch, SetStateAction, useEffect } from "react";

import Checkbox from "~/components/Checkbox";

interface CategoryItemProps {
	readonly id: string;
	readonly category: string;
	readonly setCategories: Dispatch<SetStateAction<readonly CategoryObject[]>>;
}

export interface CategoryObject {
	readonly id: string;
	readonly category: string;
}

export default ({ category, id, setCategories }: CategoryItemProps) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleClick = () => {
		setIsChecked((prev) => !prev);
	};

	useEffect(() => {
		if (isChecked) {
			setCategories((prev) => [...prev, { category, id }]);
		} else {
			setCategories((prev) => prev.filter((cat) => cat.id !== id));
		}
	}, [isChecked]);

	return (
		<div className="flex items-center cursor-pointer">
			<Checkbox
				checked={isChecked}
				className="mr-2 lg:mr-4"
				onChange={handleClick}
			/>
			<span className="inline-block w-full" onClick={handleClick}>
				{category}
			</span>
		</div>
	);
};
