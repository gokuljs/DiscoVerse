import { Member, Profile, Server } from '@prisma/client';

export type ServerWithProfileWithMembers = Server & {
    members: (Member & { profile: Profile })[];
};
