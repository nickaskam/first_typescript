import React, { Component } from "react";

type Props = {
  author: React.ReactNode;
  email: React.ReactNode;
};

export class Footer extends Component<Props, {}> {
  render() {
    return (
      <div className="pageName">
        <p>
          This website was made by {this.props.author} at {this.props.email}
        </p>
      </div>
    );
  }
}
