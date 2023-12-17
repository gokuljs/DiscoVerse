import { useEffect, useState } from 'react';

function useClientSideRender() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted;
}

export default useClientSideRender;
