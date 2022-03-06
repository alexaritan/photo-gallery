import { Box } from '@mui/system';
import { Zoom } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export const ScrollToTop = ({ children }: { children: React.ReactElement }) => {
	const trigger = useScrollTrigger({
		target: window,
		disableHysteresis: true,
		threshold: 300,
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = (
			(event.target as HTMLDivElement).ownerDocument || document
		).querySelector('#albumTitle');

		if (anchor) {
			anchor.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	};

	return (
		<Zoom in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Zoom>
	);
};
