import { useState, useEffect } from "react";

import Modal from "../Modal";
import Magazine from "../Icons/Magazine";
import CustomSelect from "../CustomSelect";
import CategoryItem, { CategoryObject } from "./CategoryItem";

export interface CategoriesModalProps {
	readonly close: VoidFunction;
	readonly opened: boolean;
	readonly cities: readonly string[];
	readonly categories: readonly CategoryObject[];
}

export const _baseUrl = "https://platforma.volunteer.country/events";

export default ({
	close,
	opened,
	cities,
	categories,
}: CategoriesModalProps) => {
	const [finalUrl, setFinalUrl] = useState("");
	const [selectedCities, setCities] = useState<readonly string[]>([]);
	const [selectedCategories, setCategories] = useState<
		readonly CategoryObject[]
	>([]);

	const composeUrl = (
		baseUrl: string = "",
		cities: readonly string[] = [],
		categories: readonly CategoryObject[] = []
	): string => {
		const citiesQuery = cities.length > 0 ? `keywords=${cities.join(" ")}` : "";
		const categoriesQeury =
			categories.length > 0
				? categories.map(({ id }) => `filtered_categories[]=${id}`).join("&")
				: "";

		const fullQuery = [citiesQuery, categoriesQeury].filter(Boolean).join("&");

		return baseUrl + (fullQuery.length > 0 ? `?${fullQuery}` : "");
	};

	useEffect(() => {
		const url = composeUrl(_baseUrl, selectedCities, selectedCategories);
		setFinalUrl(encodeURI(url));
	}, [selectedCategories.length, selectedCities.length]);

	const handleChange = (data: { value: string; label: string }[]) => {
		const cities = data.map(({ value }) => value);
		setCities(cities);
	};

	return (
		<Modal close={close} opened={opened}>
			<CustomSelect
				isMulti
				className="mb-6 text-primary-color"
				onChange={handleChange}
				options={cities.map((city) => ({
					value: city,
					label: city,
				}))}
				placeholder="Оберіть місто"
			/>
			<p className="font-16 leading-4 text-slate-300 mb-6">
				Категорії де ви можете допомогти
			</p>
			<ul className="mb-6 overflow-auto">
				{categories.map(({ category, id }) => (
					<li className="mb-6" key={category + id}>
						<CategoryItem
							category={category}
							id={id}
							setCategories={setCategories}
						/>
					</li>
				))}
			</ul>
			<div className="flex py-6 border-t border-t-solid border-t-slate-600">
				<a
					className="inline-block mr-4 md:w-60 text-center font-semibold rounded-full bg-secondary-color p-4 md:mr-8 text-primary-color"
					href={finalUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Знайти волонтерства
				</a>
				<a
					className="flex items-center justify-center md:w-50 max-w-xs text-center border font-semibold p-4 rounded-full bg-primary-color"
					href="https://volunteer.country/registration"
					target="_blank"
				>
					<span className="inline-block mr-4">Заповнити анкету</span>
					<Magazine />
				</a>
			</div>
		</Modal>
	);
};
