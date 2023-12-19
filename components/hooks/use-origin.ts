import useClientSideRender from './useMount';

export const useOrigin = () => {
    const isMounted = useClientSideRender();
    const origin =
        typeof window !== undefined && window.location.origin
            ? window.location.origin
            : '';
    if (!isMounted) {
        return null;
    }
    return origin;
};
