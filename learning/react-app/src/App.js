import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./App.css";


class App extends Component {
  constructor(props) {
    // 제일 먼저 실행되어 초기화
    super(props);
    // 정보 은닉
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          // constructor - state 구문
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title="HTML"
          sub="HTML is HyperText Markup Language."
        ></Content>
      </div>
      //<div className="App">Hello, React!!!</div>
    );
  }
}

export default App;
