import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import withAnalytics from '../src/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Title>Ola</Title>
    <img src="/static/a.jpg" alt="" width="200" />
    <Link href="/users">
      <a>Usuarios</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
