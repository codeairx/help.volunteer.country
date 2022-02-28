import { useState } from "react";

interface CategoryItemProps {
	readonly category: string;
	readonly id: string;
}

export default ({ category, id }: CategoryItemProps) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleClick = () => setIsChecked((prev) => !prev);

	return (
		<div className="flex items-center cursor-pointer" onClick={handleClick}>
			<input
				className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
				type="checkbox"
				checked={isChecked}
			/>
			<label className="cursor-pointer form-check-label text-16 text-black-800 leading-3">
				{category}
			</label>
		</div>
	);
};
