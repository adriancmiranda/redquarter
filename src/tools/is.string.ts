/**
 * isString
 * @param {unknown} value
 * @returns {value is string}
 */
export const isString = (value: unknown): value is String => {
	return typeof value === 'string' || value instanceof String;
};

export default isString;
