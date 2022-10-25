var App = React.createClass({
    getInitialState: function () {
        return {
            order: false,
            search: ''
        };
    },
    onOrderChange: function (order) {
        this.setState({ order: order })

    },
    onFilterTextChange: function (text) {
        this.setState({ search: text })
    },
    onResetClick: function () {
        this.setState({
            order: false,
            search: ''
        });
    },
    render: function () {
        return React.createElement(Filter, {
            order: this.state.order,
            search: this.state.search,
            data: srcData,
            onResetClick: this.onResetClick,
            onOrderChange: this.onOrderChange,
            onFilterTextChange: this.onFilterTextChange
        });
    }
});