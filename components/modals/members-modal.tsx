'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';
import { useModal } from '../hooks/us-modal-store';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Check, Copy, RefreshCw } from 'lucide-react';
import { useOrigin } from '../hooks/use-origin';
import { useState } from 'react';
import axios from 'axios';

export const MembersModal = () => {
    const { isOpen, type, onClose, data, onOpen } = useModal();
    const origin = useOrigin();
    const [copied, setCopied] = useState<boolean>(false);
    const [isLoading, SetIsLoading] = useState<boolean>(false);
    const isModalOpen = isOpen && type === 'members';
    const { server } = data;
    const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

    const onCopy = (): void => {
        navigator.clipboard.writeText(inviteUrl);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    const regenerate = async () => {
        try {
            SetIsLoading(true);
            const response = await axios.patch(
                `/api/servers/${server?.id}/invite-code`
            );
            onOpen('invite', {
                server: response.data
            });
        } catch (error) {
            console.log(error);
        } finally {
            SetIsLoading(false);
        }
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='p-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Invite Friends
                    </DialogTitle>
                </DialogHeader>
                <div className='p-6'>
                    <Label className='uppercase font-bold text-xs text-zinc-500 dark:text-secondary/70'>
                        server invite link
                    </Label>
                    <div className='flex items-center mt-2 gap-x-2'>
                        <Input
                            disabled={isLoading}
                            className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                            value={inviteUrl}
                        />
                        <Button
                            size='icon'
                            onClick={onCopy}
                            disabled={isLoading}
                        >
                            {copied ? (
                                <Check className='w-4 h-4' />
                            ) : (
                                <Copy className='w-4 h-4' />
                            )}
                        </Button>
                    </div>
                    <Button
                        disabled={isLoading}
                        variant='link'
                        size='sm'
                        className='text-xs text-zinc-500 mt-4'
                        onClick={regenerate}
                    >
                        Generate a new link
                        <RefreshCw className='w-4 h-4 ml-2' />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
