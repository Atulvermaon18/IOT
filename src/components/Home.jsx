import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';
import BreadcrumbExampleStandard from "./Breadcrumb";
import ItemExampleItems from './List';
class Home extends Component {
  render() {
    return (
          <div>
              <BreadcrumbExampleStandard />
              <ItemExampleItems />
          </div>
    );
  }
}

export default Home;
