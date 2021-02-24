import Layout, { Meta } from '../../components/Layout';
import Markdown from '../../components/Markdown';
import { getAllDocs, getDocBySlug } from '../../../lib/docs';
import markdownToHtml from '../../../lib/markdown';

interface DocProps {
  meta: Meta;
  content: string;
}

export const Doc: React.FC<DocProps> = ({
  meta,
  content,
}: DocProps & React.PropsWithChildren<DocProps>) => (
  <Layout meta={meta}>
    <Markdown content={{ __html: content }} />
  </Layout>
);

type StaticProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: StaticProps) {
  const { slug } = params;
  const doc = getDocBySlug(slug);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content,
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();
  return {
    paths: docs.map((doc) => ({
      params: {
        slug: doc.slug,
      },
    })),
    fallback: true,
  };
}

export default Doc;
