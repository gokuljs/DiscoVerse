import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { ChannelType } from '@prisma/client';
import { redirect } from 'next/navigation';
import { useMemo } from 'react';

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

    const textChannels = server.channels.filter((item) => item.type === ChannelType.TEXT);
    const audioChannels = server.channels.filter((item) => item.type === ChannelType.AUDIO);
    const videoChannels = server.channels.filter((item) => item.type === ChannelType.VIDEO);
    const members = server.members.filter((item) => item.profileId !== profile.id);
    return <div>server sidebar</div>;
};
