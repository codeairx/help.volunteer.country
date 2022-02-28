import unityHandsURL from "./unity_hands.png";

export interface MainProps {
	readonly toggleCategoriesModal: VoidFunction;
}

export default ({ toggleCategoriesModal }: MainProps) => (
	<main className="flex py-6 px-4 md:py-16 md:px-8 lg:py-32 lg:px-20 flex-1">
		<div className="lg:mr-36">
			<h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-10">
				Волонтерська платформа для координації допомоги
			</h1>
			<em className="not-italic font-bold text-lg">
				Наша потреба у волонтерах є як ніколи актуальною у зв`язку із війною із
				Росією.
			</em>
			<p className="text-lg mb-10">
				Ми отримуємо тисячі запитів з проханням допомоги. Сотні тисяч людей
				мають велике бажання і готові допомогати. Цей ресурс створений УВС та
				волонтерами для налагодження координації отримання та надання допомоги.
			</p>

			<div className="flex flex-col-reverse md:flex-row">
				<button
					className="inline-block md:w-60 font-semibold rounded-full bg-secondary-color py-4 px-6 md:mr-8"
					onClick={toggleCategoriesModal}
				>
					Допомогти
				</button>
				<a
					rel="noopener noreferrer"
					href="https://t.me/VolunteersHotlineBot"
					target="_blank"
					className="
						inline-block
						md:w-60
						font-semibold
						rounded-full
						bg-third-color
						py-4
						px-6
						mb-4
						md:mb-0
						text-center
					"
				>
					Отримати допомогу
				</a>
			</div>
		</div>

		<div className="hidden lg:block">
			<img src={unityHandsURL} alt="Hands of Ukrainian unity" />
		</div>
	</main>
);
