import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import Layout from "../components/Layout";
import Posts from "../components/Posts";


const Home: NextPage = () => {
  return (
      <Layout>
            <Posts />
      </Layout>
  );
};

export default connect()(Home);
