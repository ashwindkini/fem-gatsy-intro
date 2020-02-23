import React from 'react';
import { css } from '@emotion/core';
import ReadLink from './read-link';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0.75rem;
      padding-bottom: 1rem;

      &:first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin: 0;
          }
        `}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <ReadLink to={post.slug}>{post.title}</ReadLink>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </article>
);

export default PostPreview;
