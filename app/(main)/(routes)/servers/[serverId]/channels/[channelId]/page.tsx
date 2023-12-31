import ChatHeader from '@/components/chat/chat-header';
import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

interface ChannelIdPage {
    params: {
        serverId: string;
        channelId: string;
    };
}

const ChannelIdPage: React.FC<ChannelIdPage> = async ({ params }) => {
    const profile = await currentProfile();
    if (!profile) {
        return redirectToSignIn();
    }
    const channel = await db.channel.findUnique({
        where: {
            id: params?.channelId
        }
    });

    const member = await db.member.findFirst({
        where: {
            serverId: params.serverId,
            profileId: profile.id
        }
    });
    if (!channel || !member) {
        return redirect('/');
    }
    return (
        <div className='bg-white dark:bg-[#313338] flex flex-col h-full'>
            <ChatHeader
                serverId={params.serverId}
                name={channel?.name}
                type='channel'
            />
        </div>
    );
};

export default ChannelIdPage;
