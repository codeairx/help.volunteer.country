import { useState } from "react";

import Main from "~/components/Main";
import Header from "~/components/Header";
import ChatsModal from "~/components/ChatsModal";

import styles from "../tailwind.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default () => {
	const [isChatsModalOpened, setIsChatsModalOpened] = useState(false);

	return (
		<div className="flex flex-col">
			<Header toggleChatsModal={() => setIsChatsModalOpened((old) => !old)} />
			<Main />
			<ChatsModal opened={isChatsModalOpened} />
		</div>
	);
};
