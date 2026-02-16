import {Header} from '@/components/header';
import {Heading} from '@/mdx/heading';
import {TierListNav} from '@/components/tier-list-nav';
import type {PropsWithChildren} from 'react';

const TierListLayout = ({children}: PropsWithChildren) => {
    return (
        <>
            <Header />
            <Heading tag="h2">Tier List</Heading>
            <TierListNav />
            {children}
        </>
    );
};

export default TierListLayout;
