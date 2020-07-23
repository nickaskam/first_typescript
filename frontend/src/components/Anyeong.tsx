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
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>1</th>
              <th>2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Away</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Home</td>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
