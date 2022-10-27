var App = React.createClass({
    getInitialState: function () {
        return {
            order: false,
            search: '',
            data: [...srcData]
        };
    },
    onOrderChange: function (order) {
        this.setState({
            order: order,
            search: this.state.search,
            data: this.filterBy(srcData, this.state.search, order)
        })
    },
    onFilterTextChange: function (text) {
        this.setState({
            order: this.state.order,
            search: text,
            data: this.filterBy(srcData, text, this.state.order)
        })
    },
    onResetClick: function () {
        this.setState({
            order: false,
            search: '',
            data: this.filterBy(srcData, '', false)
        });
    },
    filterBy(data, search, order) {
        console.log("App filterBy");
        var filterData = [...data];
        if (search.length > 0)
            filterData = filterData.filter(x => x.includes(search));
        if (order)
            filterData = filterData.sort();
        return filterData;
    },

    onForceUpdateClick: function () {
        this.forceUpdate();
    },

    componentWillMount: function () {
        console.log("App componentWillMount")
    },
    componentDidMount: function () {
        console.log("App componentDidMount")
    },
    componentWillReceiveProps: function () {
        console.log("App componentWillReceiveProps")
    },

    // shouldComponentUpdate: function (nextProps, nextState) {
    //     console.log("shouldComponentUpdate ", nextProps, this.props, nextState, this.state)
    //     return true;
    // },
    componentWillUpdate: function () {
        console.log("App componentWillUpdate")
    },
    componentDidUpdate: function () {
        console.log("App componentDidUpdate")
    },
    componentWillUnmount: function () {
        console.log("App componentWillUnmount")
    },

    render: function () {
        return React.DOM.div({},
            React.DOM.button({ onClick: this.onForceUpdateClick }, "Force update"),
            React.createElement(Filter, {
                order: this.state.order,
                search: this.state.search,
                data: this.state.data,
                onResetClick: this.onResetClick,
                onOrderChange: this.onOrderChange,
                onFilterTextChange: this.onFilterTextChange
            })
        );
    }
});