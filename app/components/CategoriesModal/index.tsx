import { useState } from "react";

import Modal from "../Modal";
import CategoryItem from "./CategoryItem";
import categories from "~/data/categories.json";
import chats from "~/data/chats.json";
import CustomSelect from "../CustomSelect";

export interface CategoriesModalProps {
	readonly close: VoidFunction;
	readonly opened: boolean;
}

export const _baseUrl = "https://platforma.volunteer.country/events";

export default ({ close, opened }: CategoriesModalProps) => {
	const [baseUrl, setBaseUrl] = useState(_baseUrl);

	// const transformUrl = (url) => {

	// }

	return (
		<Modal close={close} opened={opened}>
			<CustomSelect
				className="mb-6"
				isMulti
				onChange={console.log}
				options={Object.keys(chats).map((item) => ({
					value: item,
					label: item,
				}))}
			/>
			<div>
				<p className="font-16 leading-4 font-bold mb-6">
					Категорії де ви можете допомогти
				</p>
				<ul>
					{Object.entries(categories).map(([category, id]) => (
						<li className="mb-6" key={category + id}>
							<CategoryItem category={category} id={id} />
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};
