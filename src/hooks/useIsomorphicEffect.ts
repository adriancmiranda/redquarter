import { useEffect, useLayoutEffect } from 'react';
import isBrowser from '~/tools/is.browser';

const useIsomorphicEffect = (
	isBrowser() ? useLayoutEffect : useEffect
);

export default useIsomorphicEffect;
