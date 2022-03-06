import { useCallback, useEffect, useRef, useState } from 'react';

/**
 *
 * @description Takes in a callback function and a target key name
 * and calls that callback when the provided key is pressed.
 */
export const useKeyPress = ({
	onKeyPress,
	targetKey,
}: {
	onKeyPress: () => void;
	targetKey: string;
}) => {
	const [keyIsPressed, setKeyPressed] = useState(false);
	const keyRef = useRef(false);

	const handleKeyDown = useCallback(
		({ key }: { key: string }) => {
			if (key === targetKey) setKeyPressed(true);
		},
		[setKeyPressed, targetKey]
	);
	const handleKeyUp = useCallback(
		({ key }: { key: string }) => {
			if (key === targetKey) setKeyPressed(false);
		},
		[setKeyPressed, targetKey]
	);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [handleKeyDown, handleKeyUp]);

	useEffect(() => {
		if (!keyRef.current && keyIsPressed) {
			onKeyPress();
			keyRef.current = true;
		}
		if (!keyIsPressed) keyRef.current = false;
	});
};
