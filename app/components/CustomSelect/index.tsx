import Select from "react-select";

interface CustomSelectProps {
	[x: string]: any;
}

export default (props: CustomSelectProps) => {
	return <Select {...props} />;
};
