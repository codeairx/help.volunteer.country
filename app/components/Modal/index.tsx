import Modal from "react-modal";
import { PropsWithChildren } from "react";

export interface ModalProps {
	readonly opened: boolean;
}

export default ({ opened, children }: PropsWithChildren<ModalProps>) => (
	<Modal isOpen={opened}>{children}</Modal>
);
