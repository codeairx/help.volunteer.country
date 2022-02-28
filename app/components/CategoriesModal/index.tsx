import Select from "react-select";

import Modal from "../Modal";
import CategoryItem from "./CategoryItem";
import categories from "~/data/categories.json";
import chats from "~/data/chats.json";

export interface CategoriesModalProps {
	readonly close: VoidFunction;
	readonly opened: boolean;
}

export default ({ close, opened }: CategoriesModalProps) => {
	return (
		<Modal close={close} opened={opened}>
			<Select
				className="mb-6"
				isMulti
				onChange={console.log}
				options={Object.keys(chats).map((city) => ({
					value: city,
					label: city,
				}))}
			/>
			<div>
				<p className="font-16 leading-4 font-bold">
					Категорії де ви можете допомогти
				</p>
				<ul>
					{Object.entries(categories).map(([category, id]) => (
						<li className="flex items-center mb-6" key={category + id}>
							<CategoryItem category={category} id={id} />
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};
