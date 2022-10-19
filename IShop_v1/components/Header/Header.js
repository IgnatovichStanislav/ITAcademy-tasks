var Header = React.createClass({
    displayName: "Header",
    propTypes: {
        name: React.PropTypes.string
    },
    getDefaultProps: function () {
        return { name: "Default name" }
    },
    render: function () {
        return React.createElement('h1', { className: "Header" }, this.props.name)
    }
});