'use client';
import useClientSideRender from '../hooks/useMount';
import { CreateServerModal } from '../modals/create-server-modal';
import { EditServerModal } from '../modals/edit-server-modal';
import { InviteModal } from '../modals/invite-modal';

export const ModalProvider = () => {
    const isMounted = useClientSideRender();
    if (!isMounted) {
        return null;
    }
    return (
        <>
            <CreateServerModal />
            <InviteModal />
            <EditServerModal />
        </>
    );
};
