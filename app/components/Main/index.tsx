import unityHandsURL from "./unity_hands.png";

export default () => (
	<main className="flex py-6 px-4 md:py-16 md:px-8 lg:py-32 lg:px-20 flex-1">
		<div className="lg:mr-36">
			<h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-10">
				Волонтерська платформа для координації допомоги
			</h1>
			<em className="not-italic font-bold text-lg">
				Наша потреба у волонтерах є як ніколи актуальною у зв`язку із війною з
				Росією.
			</em>
			<p className="text-lg mb-10">
				Ми отримуємо тисячі запитів з проханням допомоги. Величезна бажання і
				готовність хто готовий допомогти. Цей ресурс створений УВС та
				волонтерами для налагодження координації отримання та надання допомоги.
			</p>

			<div className="flex flex-col-reverse md:flex-row">
				<button className="inline-block md:w-60 font-semibold rounded-full bg-secondary-color py-4 px-6 md:mr-8">
					Допомогти
				</button>
				<button className="inline-block md:w-60 font-semibold rounded-full bg-third-color py-4 px-6 mb-4 md:mb-0">
					Отримати допомогу
				</button>
			</div>
		</div>

		<div className="hidden lg:block">
			<img src={unityHandsURL} alt="Hands of Ukrainian unity" />
		</div>
	</main>
);
