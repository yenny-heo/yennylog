import React from "react";
import { Location } from "@reach/router";

const withLocation = Component => props =>
  (
    <Location>
      {({ location }) => <Component location={location} {...props} />}
    </Location>
  );

export default withLocation;
