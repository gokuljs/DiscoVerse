import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { ChannelType } from '@prisma/client';
import { redirect } from 'next/navigation';
import { useMemo } from 'react';
import ServerHeader from './server-header';

interface serverIdProps {
    serverId: string;
}

export const ServerSideBar: React.FC<serverIdProps> = async ({ serverId }) => {
    const profile = await currentProfile();
    if (!profile) {
        return redirect('/');
    }
    const server = await db.server.findUnique({
        where: {
            id: serverId
        },
        include: {
            channels: {
                orderBy: {
                    createdAt: 'asc'
                }
            },
            members: {
                include: {
                    profile: true
                },
                orderBy: {
                    role: 'asc'
                }
            }
        }
    });

    if (!server) {
        return redirect('/');
    }

    const textChannels = server.channels.filter(
        (item) => item.type === ChannelType.TEXT
    );
    const audioChannels = server.channels.filter(
        (item) => item.type === ChannelType.AUDIO
    );
    const videoChannels = server.channels.filter(
        (item) => item.type === ChannelType.VIDEO
    );
    const members = server.members.filter(
        (item) => item.profileId !== profile.id
    );

    const role = server.members.find((item) => item.profileId === profile.id)
        ?.role;

    return (
        <div className='flex flex-col text-primary w-full h-full dark:bg-[#2B2D31] bg-[#f2f3f5]'>
            <ServerHeader server={server} role={role} />
        </div>
    );
};
