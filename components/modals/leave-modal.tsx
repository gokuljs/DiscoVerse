'use client';

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';
import { useModal } from '../hooks/us-modal-store';
import { Button } from '../ui/button';
import { useState } from 'react';
import axios from 'axios';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';

export const LeaveModal = () => {
    const router = useRouter();
    const { isOpen, type, onClose, data, onOpen } = useModal();
    const [isLoading, setIsLoading] = useState(false);
    const isModalOpen = isOpen && type === 'leaveServer';
    const { server } = data;

    const onClick = async () => {
        try {
            setIsLoading(true);
            await axios.patch(`/api/servers/${server?.id}/leave`);
            onClose();
            router.refresh();
            router.push('/');
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='p-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Leave Server
                    </DialogTitle>
                    <DialogDescription>
                        Are You sure you want to leave
                        <span className='font-semibold text-indigo-500'>
                            {server?.name}
                        </span>
                        ?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='bg-gray-100 px-6 py-4'>
                    <div className='flex items-center justify-between w-full'>
                        <Button
                            variant={'ghost'}
                            disabled={isLoading}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant={'primary'}
                            onClick={onClick}
                            disabled={isLoading}
                        >
                            Confirm
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
