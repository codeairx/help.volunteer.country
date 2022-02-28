import { useState } from "react";
import { json, useLoaderData } from "remix";

import Main from "~/components/Main";
import Header from "~/components/Header";
import ChatsModal from "~/components/ChatsModal";
import CategoriesModal from "~/components/CategoriesModal";

import unityHandsURL from "~/components/Main/unity_hands.png";

import styles from "../tailwind.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const meta = () => ({
	description:
		"Ми розвиваємо волонтерський рух в Україні. Наша місія – волонтерство для кожного.",
	keywords:
		"Ukrainian Volunteer Service, волонтерство, UVS, УВС, Українська Волонтерська Служба, Волонтерство в Україні",
	canonical: "https://www.help.volunteer.country",
	"og:url": "https://www.help.volunteer.country",
	"og:title": "Українська Волонтерська Служба",
	"og:description":
		"Ми розвиваємо волонтерський рух в Україні. Наша місія – волонтерство для кожного.",
	"og:type": "website",
	"og:image": "https://www.help.volunteer.country" + unityHandsURL,
	"og:locale": "uk",
});

export const loader = async () => {
	const [categories, cities] = await Promise.all([
		fetch("https://platforma.volunteer.country/api/event_categories.json")
			.then((response) => response.json())
			.then((categories) =>
				categories.map(({ id, name }: { id: string; name: string }) => ({
					id,
					category: name,
				}))
			),
		fetch("https://platforma.volunteer.country/api/cities")
			.then((response) => response.json())
			.then(({ cities }) => cities),
	]);

	return json({
		cities,
		categories,
	});
};

export default () => {
	const { cities, categories } = useLoaderData();
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
				cities={cities}
				categories={categories}
			/>
		</div>
	);
};
