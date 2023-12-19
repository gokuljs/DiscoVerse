'use Client';
import { ServerWithProfileWithMembers } from '@/types';
import { MemberRole } from '@prisma/client';
import React from 'react';
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu';

interface ServerHeaderProps {
    server: ServerWithProfileWithMembers;
    role?: MemberRole;
}

const ServerHeader: React.FC<ServerHeaderProps> = ({ server, role }) => {
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none' asChild>
                <button className='w-full text-md font-semibold px-3 flex items-center h-12 cursor-pointer border-neutral-200 dark:border-neutral-800 border-b-2 justify-between hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition'>
                    {server.name} <ChevronDown />
                </button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    );
};

export default ServerHeader;
