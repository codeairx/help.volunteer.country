import TelegramIcon from "../Icons/Telegram";

import logoURL from "./logo.png";

export interface HeaderProps {
	readonly toggleChatsModal: VoidFunction;
}

export default ({ toggleChatsModal }: HeaderProps) => (
	<header className="bg-primary-color text-white py-1 px-4 md:py-2 md:px-8 lg:py-4 lg:px-20 flex justify-between items-center">
		<div className="flex items-center">
			<a
				className="flex"
				target="_blank"
				href="https://www.volunteer.country"
				rel="noopener noreferrer"
			>
				<img
					className="h-[55px]"
					src={logoURL}
					alt="Logo of Ukrainian Volunteer Service"
				/>
			</a>

			<div hidden className="h-px w-8 bg-slate-600 rotate-90" />

			<a href="#" hidden rel="noopener noreferrer">
				<img src="#" alt="Book icon" />
				<span>Як отримати допомогу?</span>
			</a>
		</div>

		<div className="flex items-center">
			<button
				onClick={toggleChatsModal}
				className="flex items-center rounded-full p-2 border-2 border-solid border-slate-700 mr-4"
			>
				<TelegramIcon className="mr-2" /> <span>Чат твого міста</span>
			</button>
			<a
				className="bg-secondary-color rounded-full text-primary-color py-3 px-6 font-semibold"
				target="_blank"
				href="https://savelife.in.ua/donate/"
				rel="noopener noreferrer"
			>
				Підтримати захисників
			</a>
		</div>
	</header>
);
