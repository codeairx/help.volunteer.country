import { useState, Dispatch, SetStateAction } from "react";

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
			<label className="flex items-center cursor-pointer">
				<input
					type="checkbox"
					className="form-checkbox cursor-pointer"
					checked={isChecked}
					style={{ marginRight: "1rem" }}
				/>
				<span className="inline-block w-full" onClick={handleClick}>
					{category}
				</span>
			</label>
		</div>
	);
};
