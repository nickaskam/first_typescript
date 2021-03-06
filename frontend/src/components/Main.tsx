import React, { Component } from "react";
import "./Hello.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import Hello from "../containers/Hello";
import { Goodbye } from "./Goodbye";
import { Anyeong } from "./Anyeong";

export class Main extends Component<{}> {
  render() {
    return (
      <div className="hello">
        <Header />
        <Switch>
          <Route exact path="/hello" component={Hello} />
          <Route exact path="/goodbye" component={Goodbye} />
          <Route
            exact
            path="/anyeong"
            component={() => <Anyeong foo="bar" />}
          />
          <Redirect to="/hello" />
        </Switch>
        <Footer
          author={<strong>Nick Askam</strong>}
          email={<a href="mailto:nickaskam@gmail.com">nickaskam@gmail.com</a>}
        />
      </div>
    );
  }
}
