import React from "react";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <div className="container">
        <main>{children}</main>
      </div>
    );
  }
}

export default Layout;
