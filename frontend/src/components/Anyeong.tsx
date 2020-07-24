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
        <div className="centered">
          <table>
            <tbody>
              <tr>
                <td>Home</td>
                <td>12</td>
                <td>vs.</td>
                <td>7</td>
                <td>Away</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p></p>
        <div className="centered">
          <div>
            <table>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>Score</th>
                  <th>Hits</th>
                  <th>Errors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Away</td>
                  <td>0</td>
                  <td>0</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>7</td>
                  <td>10</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Home</td>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>7</td>
                  <td>0</td>
                  <td>0</td>
                  <td>12</td>
                  <td>16</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
