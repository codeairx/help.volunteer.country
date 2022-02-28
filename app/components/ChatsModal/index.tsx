import Modal from "../Modal";
import Select from "react-select";
import { useState } from "react";

import chats from "~/data/chats.json";

export interface ChatsModalProps {
	readonly opened: boolean;
}

export default ({ opened }: ChatsModalProps) => {
	const [cityFilter, setCityFilter] = useState<string | null>(null);

	return (
		<Modal opened={opened}>
			<Select
				isMulti
				onChange={console.log}
				options={Object.keys(chats).map((city) => ({
					value: city,
					label: city,
				}))}
			/>
			<div>
				<p>Чати міст України</p>
				<ul>
					{Object.entries(chats)
						.filter(([city]) => cityFilter === null || cityFilter === city)
						.map(([city, link]) => (
							<li key={city + link}>
								<a href={link}>Чат для міста: {city}</a>
							</li>
						))}
				</ul>
			</div>
		</Modal>
	);
};
