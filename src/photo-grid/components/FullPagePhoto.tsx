import { Dialog, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSwipeable } from 'react-swipeable';
import { useKeyPress } from '../utils/hooks/useKeyPress';

export const FullPagePhoto = ({
	handleClose,
	handleNext,
	handlePrevious,
	src,
}: {
	handleClose: () => void;
	handleNext: () => void;
	handlePrevious: () => void;
	src: string;
}) => {
	//Get info about the theme.
	const theme = useTheme();
	const shouldRenderNavIcons = useMediaQuery(theme.breakpoints.up('sm'));

	//Set up the key listeners.
	useKeyPress({ onKeyPress: handlePrevious, targetKey: 'ArrowLeft' });
	useKeyPress({ onKeyPress: handleNext, targetKey: 'ArrowRight' });

	// Make the images swipeable on mobile.
	const swipeHandlers = useSwipeable({
		onSwipedDown: handleClose,
		onSwipedLeft: handleNext,
		onSwipedRight: handlePrevious,
		preventDefaultTouchmoveEvent: true,
	});

	return (
		<Dialog fullScreen open={true} {...swipeHandlers}>
			{shouldRenderNavIcons ? (
				<IconButton
					edge="start"
					onClick={handleClose}
					style={{ left: 20, position: 'absolute', top: 10 }}
				>
					<CloseIcon />
				</IconButton>
			) : null}
			{src ? (
				<img
					alt=""
					src={src}
					style={{
						maxHeight: '100%',
						maxWidth: '100%',
						objectFit: 'contain',
					}}
				/>
			) : null}

			{shouldRenderNavIcons ? (
				<IconButton
					edge="start"
					onClick={handlePrevious}
					size="large"
					style={{ left: 20, position: 'absolute', top: '47%' }}
				>
					<NavigateBeforeIcon />
				</IconButton>
			) : null}
			{shouldRenderNavIcons ? (
				<IconButton
					edge="start"
					onClick={handleNext}
					size="large"
					style={{ right: 20, position: 'absolute', top: '47%' }}
				>
					<NavigateNextIcon />
				</IconButton>
			) : null}
		</Dialog>
	);
};
