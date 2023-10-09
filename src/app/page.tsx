import Link from 'next/link';
import {Fragment} from 'react';
import {getMdxFiles} from '@/mdx/util';
import {Heading} from '@/mdx/heading';
import {Header} from '@/components/header';

const Home = async () => {
    const mdxFiles = await getMdxFiles();
    return (
        <>
            <Header />
            {
                mdxFiles.map(({data, name}) => (
                    <Fragment key={name}>
                        <Heading tag="h3">
                            <Link href={`/blog/${name}`}>{data.title}</Link>
                        </Heading>
                        <small>{data.date}</small>
                    </Fragment>
                ))
            }
        </>
    );
};

export default Home;
