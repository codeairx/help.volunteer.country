import Modal from "../Modal";
import { useState } from "react";

import chats from "~/data/chats.json";
import Telegram from "../Icons/Telegram";
import CustomSelect from "../CustomSelect";

export interface ChatsModalProps {
	readonly close: VoidFunction;
	readonly opened: boolean;
}

export default ({ close, opened }: ChatsModalProps) => {
	const [cityFilter, setCityFilter] = useState<string | null>(null);

	return (
		<Modal
			close={() => {
				setCityFilter(null);
				close();
			}}
			opened={opened}
		>
			<CustomSelect
				className="mb-4"
				onChange={(data: any) => setCityFilter(data && data.value)}
				options={Object.keys(chats).map((city) => ({
					value: city,
					label: city,
				}))}
			/>
			<p className="text-slate-300 mb-4">Чати міст України</p>
			<div className="flex-1 overflow-auto">
				<ul>
					{Object.entries(chats)
						.filter(([city]) => cityFilter === null || cityFilter === city)
						.map(([city, link]) => (
							<li key={city + link} className="mb-4">
								<a href={link} className="flex items-center">
									<Telegram className="mr-4 h-6" /> {city}
								</a>
							</li>
						))}
				</ul>
			</div>
		</Modal>
	);
};
