var App = React.createClass({
    getInitialState: function () {
        return {
            order: false,
            search: '',
            data: [...srcData]
        };
    },
    onFilterChange: function (filter) {
        this.setState({
            order: filter.order,
            search: filter.search,
            data: this.filterBy(srcData, filter.search, filter.order)
        })
    },
    filterBy(data, search, order) {
        console.log('filterBy');
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

    render: function () {
        return React.DOM.div({},
            React.DOM.button({ onClick: this.onForceUpdateClick }, "Force update"),
            React.createElement(Filter, {
                order: this.state.order,
                search: this.state.search,
                onFilterChange: this.onFilterChange
            }),
            React.DOM.select({ multiple: true, style: { width: '250px', height: '120px', marginTop: '5px' } },
                this.state.data.map((str) => React.DOM.option({ key: str }, str))
            )
        );
    }
});