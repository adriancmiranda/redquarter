import clsx from 'clsx';
import { useEffect, useState } from 'react';
import isString from '~/tools/is.string';

export type CssModule = {
	[key: string]: string;
}

export function useClsx(css: CssModule, classes?: CssModule, override?: boolean): [CssModule, typeof clsx] {
	const [styles, setStyles] = useState(css);

	useEffect(() => {
		if (classes) {
			setStyles(
				Object.keys(css).reduce((response: CssModule, key: string) => {
					if (isString(classes[key])) {
						response[key as keyof CssModule] = override ? classes[key] : `${css[key]} ${classes[key]}`;
					} else {
						response[key as keyof CssModule] = css[key];
					}
					return response;
				}, {}),
			);
		}
	}, [classes, css, override]);

	return [styles, clsx];
}

export default useClsx;
