'use client';
import useClientSideRender from '../hooks/useMount';
import { CreateServerModal } from '../modals/create-server-modal';

export const ModalProvider = () => {
    const isMounted = useClientSideRender();
    if (!isMounted) {
        return null;
    }
    return (
        <>
            <CreateServerModal />
        </>
    );
};
