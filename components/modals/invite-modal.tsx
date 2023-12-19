'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { useModal } from '../hooks/us-modal-store';

export const InviteModal = () => {
    const { isOpen, type, onClose } = useModal();
    const router = useRouter();

    const isModalOpen = isOpen && type === 'createServer';

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='p-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Give your server a personality with a name and an image.
                        You can always change it later.
                    </DialogDescription>
                </DialogHeader>
                invite modal
            </DialogContent>
        </Dialog>
    );
};
