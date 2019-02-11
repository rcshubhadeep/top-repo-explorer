import React, { Component, Fragment } from "react";
import "whatwg-fetch";

import { Header, Footer } from "./Layouts";
import Repolist from "./Repolist";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Repolist />

        <Footer />
      </Fragment>
    );
  }
}
