import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';
import BreadcrumbExampleStandard from "./Breadcrumb";
import CardExampleGroups from "./Cards";


class Contact extends Component {
  render() {
    return (
      <div>
      <BreadcrumbExampleStandard />
      <CardExampleGroups />
    </div>
       
    );
  }
}

export default Contact;
