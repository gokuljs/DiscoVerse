'use Client';
import React from 'react';

interface ServerSearchProps {
    data: {
        label: string;
        type: 'channel' | 'member';
        data:
            | {
                  icon: React.ReactNode;
                  name: string;
                  id: string;
              }[]
            | undefined;
    }[];
}

const ServerSearch = () => {
    return <div>server Search component</div>;
};

export default ServerSearch;
