//Build URLs
export const albumUrl = ({ albumName }: { albumName?: string } = {}) =>
	`/album/${albumName ? albumName : ':albumName'}`;
export const homeUrl = `/`;
export const photoUrl = ({ albumName }: { albumName?: string } = {}) =>
	`/album/${albumName ? albumName : ':albumName'}/photo`;
