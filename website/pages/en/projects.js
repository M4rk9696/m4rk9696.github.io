const React = require('react');
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

class Projects extends React.Component {
  render() {
    return (
      <Container
        padding={['bottom', 'top']}
        background="light"
        className="myCustomClass">
        ...
      </Container>
    );
  }
}

module.exports = Projects;
