var Filter = React.createClass({
    displayName: 'Filter',
    propTypes: {
        data: React.PropTypes.arrayOf(React.PropTypes.string),
        order: React.PropTypes.bool,
        search: React.PropTypes.string
    },
    getInitialState: function () {
        return {
            data: this.props.data
        };
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
    componentWillReceiveProps: function (nextProps) {
        var filterData = [...nextProps.data];
        if (nextProps.search.length > 0)
            filterData = filterData.filter(x => x.includes(nextProps.search));
        if (nextProps.order)
            filterData = filterData.sort();

        this.setState({ data: filterData });
    },
    render: function () {
        return React.DOM.div({ className: 'Filter' },
            React.DOM.div({ className: 'FilterRow' },
                React.DOM.input({ type: 'checkbox', checked: this.props.order, onChange: this.onOrderChange }),
                React.DOM.input({ type: 'text', value: this.props.search, onChange: this.onFilterTextChange }),
                React.DOM.button({ onClick: this.onResetClick }, "Reset")),
            React.DOM.select({ multiple: true, style: { width: '250px', height: '120px', marginTop: '5px' } },
                this.state.data.map((str) => React.DOM.option({ key: str }, str))
            )
        );
    }
});