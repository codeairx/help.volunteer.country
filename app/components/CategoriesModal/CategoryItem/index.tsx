interface CategoryItemProps {
	readonly category: string;
	readonly id: string;
}

export default ({ category, id }: CategoryItemProps) => {
	return (
		<>
			<input
				className="mr-4 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
				type="checkbox"
				value=""
				id="flexCheckDefault"
			/>
			<label
				className="form-check-label text-16 text-black-800 leading-3"
				htmlFor="flexCheckDefault"
			>
				{category}
			</label>
		</>
	);
};
