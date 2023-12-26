'use client';
import useClientSideRender from '../hooks/useMount';
import { CreateChannelModel } from '../modals/create-channel-model';
import { CreateServerModal } from '../modals/create-server-modal';
import { DeleteChannelModel } from '../modals/delete-channel-model';
import { DeleteServerModal } from '../modals/delete-server-modal';
import { EditChannelModel } from '../modals/edit-channel-modal';
import { EditServerModal } from '../modals/edit-server-modal';
import { InviteModal } from '../modals/invite-modal';
import { LeaveModal } from '../modals/leave-modal';
import { MembersModal } from '../modals/members-modal';

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
            <MembersModal />
            <CreateChannelModel />
            <LeaveModal />
            <DeleteServerModal />
            <DeleteChannelModel />
            <EditChannelModel />
        </>
    );
};
