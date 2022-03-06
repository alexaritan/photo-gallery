import { Fab, ImageListItem } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { ScrollToTop } from './ScrollToTop';
import { KeyboardArrowUp } from '@mui/icons-material';

export const PhotoGrid = ({
	imgUrls,
	onClick,
	title,
	subtitle,
}: {
	imgUrls: string[];
	onClick: (id: number) => void;
	title: string;
	subtitle: string;
}) => {
	const theme = useTheme();
	const shouldRenderMultipleColumns = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div className='photoGrid'>
			<Typography component='h2' variant='h2'>
				{title}
			</Typography>
			<Typography component='div' variant='subtitle1'>
				{subtitle}
			</Typography>
			<ImageList
				cols={shouldRenderMultipleColumns ? 3 : 1}
				rowHeight={shouldRenderMultipleColumns ? 250 : 300}
			>
				{imgUrls.map((url, index) => (
					<ImageListItem
						className='photo'
						key={`photo${index}`}
						style={{ overflow: 'hidden' }}
					>
						<img alt='' onClick={() => onClick(index)} src={url} />
					</ImageListItem>
				))}
			</ImageList>
			<ScrollToTop>
				<Fab aria-label='scroll-to-top' color='primary'>
					<KeyboardArrowUp />
				</Fab>
			</ScrollToTop>
		</div>
	);
};
