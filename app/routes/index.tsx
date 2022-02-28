import { useState } from "react";

import Main from "~/components/Main";
import Header from "~/components/Header";
import ChatsModal from "~/components/ChatsModal";
import CategoriesModal from "~/components/CategoriesModal";

import styles from "../tailwind.css";

export const links = () => [{ rel: "stylesheet", href: styles }];
export const _baseUrl = "https://platforma.volunteer.country/events";

export default () => {
	const [isChatsModalOpened, setIsChatsModalOpened] = useState(false);
	const [isCategoriesModalOpened, setIsCategoriesModalOpened] = useState(false);
	const [baseUrl, setBaseUrl] = useState(_baseUrl);

	return (
		<div className="flex flex-col">
			<Header toggleChatsModal={() => setIsChatsModalOpened((old) => !old)} />
			<Main
				toggleCategoriesModal={() => setIsCategoriesModalOpened((old) => !old)}
			/>
			<ChatsModal
				close={() => setIsChatsModalOpened((old) => !old)}
				opened={isChatsModalOpened}
			/>
			<CategoriesModal
				close={() => setIsCategoriesModalOpened((old) => !old)}
				opened={isCategoriesModalOpened}
			/>
		</div>
	);
};
