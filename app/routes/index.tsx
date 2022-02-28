import { useState } from "react";

import Main from "~/components/Main";
import Header from "~/components/Header";
import ChatsModal from "~/components/ChatsModal";
import CategoriesModal from "~/components/CategoriesModal";

import styles from "../tailwind.css";

export const links = () => [
	{ rel: "stylesheet", href: styles },
	{
		name: "description",
		content:
			"Ми розвиваємо волонтерський рух в Україні. Наша місія – волонтерство для кожного.",
	},
	{
		name: "keywords",
		content:
			"Ukrainian Volunteer Service, волонтерство, UVS, УВС, Українська Волонтерська Служба, Волонтерство в Україні",
	},
	{
		property: "og:url",
		content: "#",
	},
	{
		property: "og:title",
		content: "Українська Волонтерська Служба",
	},
	{
		property: "og:description",
		content:
			"Ми розвиваємо волонтерський рух в Україні. Наша місія – волонтерство для кожного.",
	},
	{
		property: "og:type",
		content: "website",
	},
	{
		property: "og:image",
		content: "#",
	},
];

export default () => {
	const [isChatsModalOpened, setIsChatsModalOpened] = useState(false);
	const [isCategoriesModalOpened, setIsCategoriesModalOpened] = useState(false);

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
