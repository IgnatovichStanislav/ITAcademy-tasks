var Filter = React.createClass({
    displayName: 'Filter',
    propTypes: {
        order: React.PropTypes.bool,
        search: React.PropTypes.string
    },
    onOrderChange: function (event) {
        var filter = { ...this.props };
        filter.order = event.target.checked;
        this.props.onFilterChange(filter);
    },
    onFilterTextChange: function (event) {
        var filter = { ...this.props };
        filter.search = event.target.value;
        this.props.onFilterChange(filter);
    },
    onResetClick: function () {
        this.props.onFilterChange({ search: '', order: false });
    },
    render: function () {
        return React.DOM.div({ className: 'Filter' },
            React.DOM.div({ className: 'FilterRow' },
                React.DOM.input({ type: 'checkbox', checked: this.props.order, onChange: this.onOrderChange }),
                React.DOM.input({ type: 'text', value: this.props.search, onChange: this.onFilterTextChange }),
                React.DOM.button({ onClick: this.onResetClick }, "Reset"))
        );
    }
});