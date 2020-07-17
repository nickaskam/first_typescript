import React, { Component } from "react";

type Props = {
  foo: string;
};

export class Anyeong extends Component<Props, {}> {
  render() {
    return (
      <div>
        <h3>Anyeong</h3>
        <p>{this.props.foo}</p>
      </div>
    );
  }
}
