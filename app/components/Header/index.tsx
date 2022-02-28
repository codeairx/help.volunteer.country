import TelegramIcon from "../Icons/Telegram";

import logoURL from "./logo.png";

export interface HeaderProps {
	readonly toggleChatsModal: VoidFunction;
}

export default ({ toggleChatsModal }: HeaderProps) => (
	<header className="bg-primary-color text-white p-4 md:py-2 md:px-8 lg:py-4 lg:px-20 flex justify-between items-center">
		<div className="flex items-center self-stretch">
			<a
				className="flex items-center"
				target="_blank"
				href="https://www.volunteer.country"
				rel="noopener noreferrer"
			>
				<img
					className="h-[45px] md:h-[55px] mr-1"
					src={logoURL}
					alt="Logo of Ukrainian Volunteer Service"
				/>
				<span className="hidden md:inline font-bold capitalize w-min leading-none text-sm">
					Українська Волонтерська Служба
				</span>
			</a>

			<div hidden className="h-px w-8 bg-slate-600 rotate-90" />

			<a href="#" hidden rel="noopener noreferrer">
				<img src="#" alt="Book icon" />
				<span>Як отримати допомогу?</span>
			</a>
		</div>

		<div className="flex items-center self-stretch">
			<button
				onClick={toggleChatsModal}
				className="flex items-center rounded-full md:p-2 md:border-2 md:border-solid md:border-slate-700 mr-4 self-stretch md:self-auto"
			>
				<TelegramIcon className="h-[45px] md:h-6 md:mr-2" />
				<span className="hidden md:inline">Чат твого міста</span>
			</button>
			<a
				className="flex items-center bg-secondary-color rounded-full text-primary-color py-2 px-4 font-semibold self-stretch md:self-auto"
				target="_blank"
				href="https://savelife.in.ua/donate/"
				rel="noopener noreferrer"
			>
				Підтримати захисників
			</a>
		</div>
	</header>
);
