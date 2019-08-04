const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

class CodeArt extends React.Component {
  render() {
    return (
      <Container
        padding={['bottom', 'top']}
        background="light"
        className="myCustomClass">
        In Progress
      </Container>
    );
  }
}

module.exports = CodeArt;
