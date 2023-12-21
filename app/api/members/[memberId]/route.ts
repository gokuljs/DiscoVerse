import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { MemberRole } from '@prisma/client';
import { NextResponse } from 'next/server';

interface ApiResponse {
    role: MemberRole;
}

export async function PATCH(
    req: Request,
    { params }: { params: { memberId: string } }
) {
    try {
        const profile = await currentProfile();
        const { searchParams } = new URL(req.url);
        const { role } = (await req.json()) as ApiResponse;
        const serverId = searchParams.get('serverId');
        if (!profile) {
            return new NextResponse('unauthorized', { status: 401 });
        }
        if (!serverId) {
            return new NextResponse('Server Id missing', { status: 400 });
        }
        if (!params.memberId) {
            return new NextResponse('Member id missing ', { status: 400 });
        }
        const server = await db.server.update({
            where: {
                id: serverId,
                profileId: profile.id
            },
            data: {
                members: {
                    update: {
                        where: {
                            id: params.memberId,
                            profileId: {
                                not: profile.id
                            }
                        },
                        data: {
                            role
                        }
                    }
                }
            },
            include: {
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

        return NextResponse.json(server);
    } catch (error) {
        console.log('[MEMBERS_ID_PATCH]', error);
        return new NextResponse('internal error', { status: 500 });
    }
}
