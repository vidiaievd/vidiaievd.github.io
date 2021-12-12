import { createPortal } from 'react-dom'
import { StyledModal, StyledBackDrop } from './styles'

export const Modal = ({ children, close }) => createPortal(
	<StyledBackDrop >
		<StyledModal>
			{children}
		</StyledModal>
	</StyledBackDrop>,
	document.getElementById('portal-root')
);
