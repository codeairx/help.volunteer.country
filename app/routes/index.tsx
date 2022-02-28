import { useState } from "react";

import Main from "~/components/Main";
import Header from "~/components/Header";
import ChatsModal from "~/components/ChatsModal";
import CategoriesModal from "~/components/CategoriesModal";

import styles from "../tailwind.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default () => {
	const [isChatsModalOpened, setIsChatsModalOpened] = useState(false);
	const [isCategoriesModalOpened, setIsCategoriesModalOpened] = useState(false);

	return (
		<div className="flex flex-col">
			<Header toggleChatsModal={() => setIsChatsModalOpened((old) => !old)} />
			<Main
				toggleCategoriesModal={() => setIsCategoriesModalOpened((old) => !old)}
			/>
			<ChatsModal opened={isChatsModalOpened} />
			<CategoriesModal opened={isCategoriesModalOpened} />
		</div>
	);
};
