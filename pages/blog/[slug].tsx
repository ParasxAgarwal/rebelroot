import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Container from 'components/Container';
import Code from 'components/Code';
import Quote from 'components/Quote';
import ArticleImage from 'components/ArticleImage';
import CustomLink from 'components/Link';
import { media } from 'utils/media';
import { getReadTime } from 'utils/readTime';
import { getAllPostsSlugs, getSinglePost } from 'utils/postsFetcher';
import Header from 'views/SingleArticlePage/Header';
import MetadataHead from 'views/SingleArticlePage/MetadataHead';
import OpenGraphHead from 'views/SingleArticlePage/OpenGraphHead';
import ShareWidget from 'views/SingleArticlePage/ShareWidget';
import StructuredDataHead from 'views/SingleArticlePage/StructuredDataHead';
import { SingleArticle } from 'types';

// Components available inside .mdx blog post files
const mdxComponents = {
  Code,
  Quote,
  ArticleImage,
  Link: CustomLink,
};

interface Props {
  slug: string;
  mdxSource: MDXRemoteSerializeResult;
  meta: SingleArticle['meta'];
}

export default function SingleArticlePage({ slug, mdxSource, meta }: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readTime, setReadTime] = useState('');

  useEffect(() => {
    if (contentRef.current) {
      setReadTime(getReadTime(contentRef.current.textContent || ''));
    }

    // Lazy-load prism syntax highlighting theme
    if (!document.querySelector('link[data-id="prism-theme"]')) {
      const head = document.querySelector('head');
      if (head) {
        const link = document.createElement('link');
        link.setAttribute('data-id', 'prism-theme');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', '/prism-theme.css');
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'; this.onload=null;");
        head.appendChild(link);
      }
    }
  }, []);

  const { title, description, date, tags, imageUrl } = meta;
  const metaObj = { title, description, date, tags, imageUrl, author: '' };
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const absoluteImageUrl = imageUrl ? imageUrl.replace(/\/+/, '/') : '';

  return (
    <>
      <Head>
        <noscript>
          <link rel="stylesheet" href="/prism-theme.css" />
        </noscript>
      </Head>
      <OpenGraphHead slug={slug} {...metaObj} />
      <StructuredDataHead slug={slug} {...metaObj} />
      <MetadataHead {...metaObj} />
      <CustomContainer id="content" ref={contentRef}>
        <ShareWidget title={title} slug={slug} />
        <Header title={title} formattedDate={formattedDate} imageUrl={absoluteImageUrl} readTime={readTime} />
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </CustomContainer>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPostsSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const { slug } = params as { slug: string };
  const post = await getSinglePost(slug);

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  return {
    props: {
      slug,
      mdxSource,
      meta: post.meta,
    },
  };
}

const CustomContainer = styled(Container)`
  position: relative;
  max-width: 90rem;
  margin: 10rem auto;

  ${media('<=tablet')} {
    margin: 5rem auto;
  }
`;
