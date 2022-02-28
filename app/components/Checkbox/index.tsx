export interface CheckboxProps {
	readonly id: string;
	readonly checked: boolean;
	readonly onChange: VoidFunction;
	readonly className?: string;
}

export default ({ id, checked, onChange, className = "" }: CheckboxProps) => (
	<>
		<input
			id={id}
			type="checkbox"
			checked={checked}
			onChange={onChange}
			className="invisible absolute"
		/>
		<label
			htmlFor={id}
			className={
				`
				flex
				items-center
				justify-center
				rounded
				w-6
				h-5
				border
				border-solid
				border-slate-500
				cursor-pointer
				relative

				before:transition-colors
				before:block
				before:absolute
				before:top-1/2
				before:left-1/2
				before:w-2
				before:h-2
				before:rounded-sm
				before:-translate-x-1/2
				before:-translate-y-1/2
				` +
				(checked ? " before:bg-slate-200 " : "") +
				className
			}
		></label>
	</>
);
