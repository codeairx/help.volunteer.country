import { useState, useEffect } from "react";

import Modal from "../Modal";
import CustomSelect from "../CustomSelect";
import CategoryItem, { CategoryObject } from "./CategoryItem";
import icon from "~/assets/icons/magazine.svg";

import chats from "~/data/chats.json";
import categoriesData from "~/data/categories.json";

export interface CategoriesModalProps {
	readonly close: VoidFunction;
	readonly opened: boolean;
}

export interface CityObject {
	readonly city: string;
}

export const _baseUrl = "https://platforma.volunteer.country/events";

export default ({ close, opened }: CategoriesModalProps) => {
	const [finalUrl, setFinalUrl] = useState("");
	const [cities, setCities] = useState<CityObject[]>([]);
	const [categories, setCategories] = useState<CategoryObject[]>([]);

	const composeUrl = (
		baseUrl: string = "",
		cities: CityObject[] = [],
		categories: CategoryObject[] = []
	): string => {
		let modUrl = [_baseUrl, "?keywords="];
		if (!cities.length && !categories.length) return baseUrl;
		else if (cities.length && !categories.length) {
			cities.forEach((city) => modUrl.push(city.city + " "));
		} else if (!cities.length && categories.length) {
			categories.forEach((cat) =>
				modUrl.push(`&filtered_categories[]=${cat.id}`)
			);
		} else {
			cities.forEach((city) => modUrl.push(city.city + " "));
			categories.forEach((cat) =>
				modUrl.push(`&filtered_categories[]=${cat.id}`)
			);
		}
		return modUrl.join("");
	};

	useEffect(() => {
		const url = composeUrl(_baseUrl, cities, categories);
		setFinalUrl(encodeURI(url));
	}, [categories.length, cities.length]);

	const handleChange = (data: { value: string; label: string }[]) => {
		const cities = data.map((item) => ({ city: item.value }));
		setCities(cities);
	};

	return (
		<Modal close={close} opened={opened}>
			<CustomSelect
				className="mb-6"
				isMulti
				onChange={handleChange}
				options={Object.keys(chats).map((city) => ({
					value: city,
					label: city,
				}))}
			/>
			<div>
				<p className="font-16 leading-4 font-bold mb-6">
					Категорії де ви можете допомогти
				</p>
				<ul className="mb-6">
					{Object.entries(categoriesData).map(([category, id]) => (
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
					className="flex py-6 px-6  border-t-4 border-indigo-600"
					style={{ borderTop: "1px solid #FFFFFF" }}
				>
					<a
						className="inline-block md:w-60 text-center font-semibold rounded-full bg-secondary-color py-4 px-6 md:mr-8 text-primary-color"
						href={finalUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						Знайти волонтерства
					</a>
					<a
						className="flex items-center inline-block md:w-60 text-center border font-semibold rounded-full bg-primary-color py-4 px-6 text-secondary-color"
						href="#"
						target="_blank"
					>
						<span className="inline-block mr-4">Заповнити анкету</span>
						<img className="inline-block" src={icon} alt="form icon" />
					</a>
				</div>
			</div>
		</Modal>
	);
};
