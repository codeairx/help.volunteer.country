import Modal from "react-modal";
import { PropsWithChildren } from "react";

export interface ModalProps {
	readonly close: VoidFunction;
	readonly opened: boolean;
}

export default ({ close, opened, children }: PropsWithChildren<ModalProps>) => (
	<Modal
		overlayClassName="
			fixed
			bg-primary-color/90
			top-0
			left-0
			w-full
			h-full
			p-4
			md:p-0
			md:flex
			md:justify-end
		"
		className={{
			base: `
				transition-transform
				bg-primary-color
				px-4
				pt-4
				text-white
				outline-none
				flex
				flex-col
				md:relative
				md:px-8
				md:pt-8
				md:border-l-2
				md:border-l-solid
				md:border-l-slate-800
				md:w-1/2
				md:translate-x-full
				lg:w-5/12
			`,
			beforeClose: "",
			afterOpen: `
				md:translate-x-0
			`,
		}}
		bodyOpenClassName="overflow-hidden"
		shouldCloseOnOverlayClick
		onRequestClose={close}
		isOpen={opened}
	>
		<button
			className="
				bg-white
				absolute
				top-1
				left-1
				rounded-full
				p-4
				flex
				md:top-8
				md:-left-14

				before:absolute
				before:top-1/2
				before:left-1/4
				before:block
				before:h-[1px]
				before:w-4
				before:bg-primary-color
				before:-rotate-45

				after:absolute
				after:top-1/2
				after:left-1/4
				after:block
				after:h-[1px]
				after:w-4
				after:bg-primary-color
				after:rotate-45
			"
			onClick={close}
		></button>
		{children}
	</Modal>
);
