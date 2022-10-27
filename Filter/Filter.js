var Filter = React.createClass({
    displayName: 'Filter',
    propTypes: {
        data: React.PropTypes.arrayOf(React.PropTypes.string),
        order: React.PropTypes.bool,
        search: React.PropTypes.string
    },
    onOrderChange: function (event) {
        this.props.onOrderChange(event.target.checked);
    },
    onFilterTextChange: function (event) {
        this.props.onFilterTextChange(event.target.value);
    },
    onResetClick: function () {
        this.props.onResetClick();
    },

    componentWillMount: function () {
        console.log("Filter componentWillMount")
    },
    componentDidMount: function () {
        console.log("Filter componentDidMount")
    },
    componentWillReceiveProps: function () {
        console.log("Filter componentWillReceiveProps")
    },

    // shouldComponentUpdate: function (nextProps, nextState) {
    //     console.log("shouldComponentUpdate ", nextProps, this.props, nextState, this.state)
    //     return true;
    // },
    componentWillUpdate: function () {
        console.log("Filter componentWillUpdate")
    },
    componentDidUpdate: function () {
        console.log("Filter componentDidUpdate")
    },
    componentWillUnmount: function () {
        console.log("Filter componentWillUnmount")
    },
    render: function () {
        return React.DOM.div({ className: 'Filter' },
            React.DOM.div({ className: 'FilterRow' },
                React.DOM.input({ type: 'checkbox', checked: this.props.order, onChange: this.onOrderChange }),
                React.DOM.input({ type: 'text', value: this.props.search, onChange: this.onFilterTextChange }),
                React.DOM.button({ onClick: this.onResetClick }, "Reset")),
            React.DOM.select({ multiple: true, style: { width: '250px', height: '120px', marginTop: '5px' } },
                this.props.data.map((str) => React.DOM.option({ key: str }, str))
            )
        );
    }
});