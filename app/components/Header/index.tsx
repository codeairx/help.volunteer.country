import logoURL from "./logo.png";

export default () => (
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

    <div>
      <a
        className="bg-secondary-color rounded-full text-primary-color py-3 px-6 font-semibold"
        target="_blank"
        href="https://savelife.in.ua/donate/"
        rel="noopener noreferrer"
      >
        Підтримати
      </a>
    </div>
  </header>
);
