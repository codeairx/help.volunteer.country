import Select from "react-select";

interface CustomSelectProps {
	[x: string]: any;
}

const customStyles = {
	control: (provided: any, state: any) => ({
		...provided,
		background: "#111",
		borderRadius: "50px",
		cursor: "pointer",
	}),
	option: (provided: any, state: any) => ({
		...provided,
		cursor: "pointer",
	}),
};

export default (props: CustomSelectProps) => {
	return <Select {...props} styles={customStyles} />;
};
