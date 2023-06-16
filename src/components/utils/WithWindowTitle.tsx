import Head from 'next/head';

interface WithWindowTitleProps {
  children: React.ReactNode;
  title: string;
  content?: string;
}

export const WithWindowTitle = ({
  children,
  title,
  content,
}: WithWindowTitleProps) => (
  <>
    <Head>
      <title>{title} - Flash Cards Application</title>
      <meta property="og:title" content={content || title} key="title" />
    </Head>
    {children}
  </>
);
