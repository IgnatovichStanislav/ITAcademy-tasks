var ProductList = React.createClass({
    displayName: "ProductList",
    propTypes: {
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
        var products = [];

        // products = this.props.products.map(x =>
        //     React.createElement(Product, { key: x.id, name: x.name, description: x.description, count: x.count, price: x.price, pixUrl: x.pixUrl }));

        this.props.products.forEach(x => products.push(React.createElement(Product, { key: x.id, name: x.name, description: x.description, count: x.count, price: x.price, pixUrl: x.pixUrl })));

        var total = this.props.products.map(x => x.price ?? 0).reduce((total, amoung) => total + amoung);
        products.push(React.createElement(Product, { key: 999, name: '', description: null, count: 0, price: total, pixUrl: '' }));

        return React.createElement('ul',
            { className: "ProductList" },
            products
        );
    }
});