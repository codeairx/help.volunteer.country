import Main from "~/components/Main";
import Header from "~/components/Header";

import styles from "../tailwind.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default () => (
  <div className="flex flex-col">
    <Header />
    <Main />
  </div>
);
