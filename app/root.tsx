import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	type MetaFunction
} from "remix";

export const meta: MetaFunction = () => {
	return { title: "New Remix App" };
};

export default () => (
	<html lang="uk">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<title>Українська Волонтерська Служба</title>
			<Meta />
			<Links />
		</head>
		<body>
			<Outlet />
			<ScrollRestoration />
			<Scripts />
			<LiveReload />
		</body>
	</html>
);
