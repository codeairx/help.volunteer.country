import { useState, Dispatch, SetStateAction } from "react";

import Checkbox from "~/components/Checkbox";

interface CategoryItemProps {
	readonly id: string;
	readonly category: string;
	readonly setCategories: Dispatch<SetStateAction<CategoryObject[]>>;
}

export interface CategoryObject {
	readonly id: string;
	readonly category: string;
}

export default ({ category, id, setCategories }: CategoryItemProps) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleClick = () => {
		setIsChecked((prev) => !prev);
		if (!isChecked) {
			setCategories((prev) => [...prev, { category, id }]);
		} else {
			setCategories((prev) => [...prev.filter((cat) => cat.id !== id)]);
		}
	};

	return (
		<div className="flex items-center cursor-pointer" onClick={handleClick}>
			<Checkbox
				id={id}
				checked={isChecked}
				onChange={handleClick}
				className="mr-2 lg:mr-4"
			/>
			<span className="inline-block w-full">{category}</span>
		</div>
	);
};
