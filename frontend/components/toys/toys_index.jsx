const React = require('react'),
      ToyIndexItem = require('./toy_index_item');

const ToysIndex = React.createClass({
  render() {
    if (this.props.toys) {
      return(
        <ul>
          {this.props.toys.map(toy => {
            return (<ToyIndexItem toy={toy} key={toy.id} />);
          })}
        </ul>
      );
    }
    return (<div></div>);
  }
});

module.exports = ToysIndex;
