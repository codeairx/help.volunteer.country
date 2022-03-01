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
	const [finalUrl, setFinalUrl] = useState(_baseUrl);
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
		<Modal
			close={() => {
				setFinalUrl(_baseUrl);
				setCities([]);
				setCategories([]);
				close();
			}}
			opened={opened}
		>
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
				Категорії, де ви можете допомогти
			</p>
			<ul className="flex-1 mb-6 overflow-auto">
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
			<div
				className="
					flex
					flex-col
					items-stretch
					justify-between
					py-6
					border-t
					border-t-solid
					border-t-slate-600
					md:items-center
					md:flex-row
				"
			>
				<a
					className="
						inline-block
						text-center
						font-semibold
						rounded-full
						bg-secondary-color
						p-4
						text-primary-color
						flex-1
						mb-4
						md:mr-4
						md:mb-0
					"
					href={finalUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Знайти волонтерства
				</a>
				<a
					className="
						flex-1
						flex
						items-center
						justify-center
						text-center
						border
						font-semibold
						p-4
						rounded-full
						bg-primary-color
					"
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
