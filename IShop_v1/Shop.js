var Shop = React.createClass({
    displayName: "Shop",
    propTypes: {
        name: React.PropTypes.string,
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                description: React.PropTypes.string,
                count: React.PropTypes.number.isRequired,
                price: React.PropTypes.number,
                pixUrl: React.PropTypes.string.isRequired
            })
        )
    },
    render: function () {
        return React.DOM.div({ className: "Shop" },
            React.createElement(Header, { name: this.props.name }),
            React.createElement(ProductList, { products: this.props.products })
        );
    }
})



