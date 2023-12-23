'use client';
import { ServerWithProfileWithMembers } from '@/types';
import { ChannelType, MemberRole } from '@prisma/client';
import React from 'react';
import ActionTooltip from '../action.tooltip';
import { Plus } from 'lucide-react';
import useClientSideRender from '../hooks/useMount';

interface ServerSectionProps {
    label: string;
    role?: MemberRole;
    sectionType: 'channels' | 'members';
    channelType?: ChannelType;
    server?: ServerWithProfileWithMembers;
}

export const ServerSection: React.FC<ServerSectionProps> = ({
    label,
    role,
    sectionType,
    channelType,
    server
}) => {
    const isMounted = useClientSideRender();
    if (!isMounted) {
        return null;
    }
    return (
        <div className='flex items-center justify-between py-2'>
            <p className='text-xs uppercase font-semiBold text-zinc-500 dark:text-zinc-400'>
                {label}
            </p>
            {role !== MemberRole.GUEST && sectionType === 'channels' && (
                <ActionTooltip label='Create channel' side='top'>
                    <button className='text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition'>
                        <Plus className='h-4 w-4' />
                    </button>
                </ActionTooltip>
            )}
        </div>
    );
};
