import React, { Component } from 'react';

import ReactGa from 'react-ga';
import { loadGetInitialProps } from 'next/dist/lib/utils';

export default () => Composed =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log('pAGE VIEW', window.location.pathname);
      ReactGa.initialize('ID_GA');
      ReactGa.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
