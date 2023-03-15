/**
 * isBrowser
 * @returns {boolean}
 */
export const isBrowser = (): boolean => {
	return typeof window !== 'undefined' && !!window.document?.createElement;
};

export default isBrowser;
