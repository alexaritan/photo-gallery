# photo-gallery

A really simple TypeScript based photo gallery for React apps. Built using MUI.

# How to use

## Install it

Yarn

`yarn add @alexaritan/photo-gallery`

or npm

`npm i @alexaritan/photo-gallery`

## Use it

Display a gallery

```
import { PhotoGrid } from '@alexaritan/photo-gallery;

export const Gallery = () => {
	const photoUrls = ['./img1.jpg', './img2/jpg'];
	const onClick = (id) => console.log(`clicked image ${id}`);
	const subtitle = 'Sweet, sweet chocolate';
	const title = 'I remember when they first invested chocolate';

	return (
		<PhotoGrid
			imgUrls={photoUrls}
			onClick={onClick}
			subtitle={subtitle}
			title={title}
		/>
	);
};
```

View a single photo

```
import { FullPagePhoto } from '@alexaritan/photo-gallery';

export const Photo = () => {
	const handleClose = () => console.log('closed');
	const handleNext = () => console.log('next');
	const handlePrevious = () => console.log('previous');
	const src = './img1.jpg';

	return (
		<FullPagePhoto
			handleClose={handleClose}
			handleNext={handleNext}
			handlePrevious={handlePrevious}
			src={src}
		/>
	);
}
```

## Gallery Screenshots

Default display on desktop
![text](./resources/screenshot1.png)

Automatically reformats for mobile

![text](./resources/screenshot2.png)

Includes a "back to top" button after scrolling down a bit

![text](./resources/screenshot3.png)
