import Select from "react-select";

interface CustomSelectProps {
	readonly [x: string]: object | string | boolean;
}

const customStyles = {
	control: (provided: object, state: object) => ({
		...provided,
		background: "#111",
		borderRadius: "50px",
		cursor: "pointer",
	}),
	option: (provided: object, state: object) => ({
		...provided,
		cursor: "pointer",
	}),
	input: (provided: object, state: object) => ({
		...provided,
		color: "#fff",
	}),
	placeholder: (provided: object, state: object) => ({
		...provided,
		color: "#fff",
	}),
};

export default (props: CustomSelectProps) => {
	return <Select {...props} styles={customStyles} />;
};
