import React from "react";
import Header from "./Header";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <div className="container">
        <Header pathname={location.pathname} title={title} />
        <main>{children}</main>
      </div>
    );
  }
}

export default Layout;
