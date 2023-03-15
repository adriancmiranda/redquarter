import { useState } from 'react';
import useIsomorphicEffect from './useIsomorphicEffect';

const useMatchMedia = (mediaQueryString: string, initialState = false) => {
	const [state, setState] = useState(initialState);

	useIsomorphicEffect(() => {
		if (window.matchMedia) {
			const mediaQueryList = window.matchMedia(mediaQueryString);

			const updateState = () => {
				setState(mediaQueryList.matches);
			};
			updateState();

			mediaQueryList.addEventListener('change', updateState);
			return () => {
				mediaQueryList.removeEventListener('change', updateState);
			};
		}
	}, [mediaQueryString]);

	return state;
};

export default useMatchMedia;
