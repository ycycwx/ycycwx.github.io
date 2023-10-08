import Link from 'next/link';
import {getMdxFiles} from '@/utils/mdx';

const Home = async () => {
    const mdxFiles = await getMdxFiles();
    return (
        <ul>
            {
                mdxFiles.map(({data, name}) => (
                    <li key={name}>
                        <Link href={`/blog/${name}`}>{data.title}</Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default Home;
