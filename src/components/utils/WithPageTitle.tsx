import Head from 'next/head';

interface Props {
  children: React.ReactNode;
  title: string;
  content?: string;
}

export const WithPageTitle = ({ children, title, content }: Props) => (
  <>
    <Head>
      <title>{title} - Flash Cards Application</title>
      <meta property="og:title" content={content || title} key="title" />
    </Head>
    {children}
  </>
);
