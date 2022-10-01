import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

export default function Breadcrumb() {
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a href="/">Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href="/francehotels"> France Hotels (201,623) </a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href="/parishotels">Paris Hotels (10,565)</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active> shangrila </MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </>
  );
}