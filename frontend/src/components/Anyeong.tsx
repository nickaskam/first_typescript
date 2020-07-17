import React, { Component } from "react";

type Props = {
  foo: string;
};

export class Anyeong extends Component<Props, {}> {
  render() {
    return <p>{this.props.foo}</p>;
  }
}
