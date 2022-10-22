import { Dialog, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import { useKeyPress } from '../utils/hooks/useKeyPress';

const renderFullPage = ({
	children,
	fullScreen,
	swipeHandlers,
}: {
	children: React.ReactElement;
	fullScreen: boolean;
	swipeHandlers: SwipeableHandlers;
}) =>
	fullScreen ? (
		<Dialog fullScreen open={true} {...swipeHandlers}>
			{children}
		</Dialog>
	) : (
		<div {...swipeHandlers}>{children}</div>
	);

export const FullPagePhoto = ({
	handleClose,
	handleNext,
	handlePrevious,
	fullScreen,
	src,
}: {
	handleClose: () => void;
	handleNext: () => void;
	handlePrevious: () => void;
	fullScreen: boolean;
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

	return renderFullPage({
		children: (
			<>
				{shouldRenderNavIcons ? (
					<IconButton
						edge="start"
						onClick={handleClose}
						style={{
							left: 20,
							position: 'absolute',
							top: 10,
							zIndex: 10000,
							...(!fullScreen && { top: '90px' }),
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
				{src ? (
					<img
						alt=""
						src={src}
						style={{
							...(fullScreen && { margin: 'auto' }),
							...(!fullScreen && {
								left: 0,
								marginLeft: 'auto',
								marginRight: 'auto',
								maxHeight: '85%',
								position: 'absolute',
								right: 0,
							}),
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
			</>
		),
		fullScreen,
		swipeHandlers,
	});
};
