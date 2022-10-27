var Shop = React.createClass({
    displayName: "Shop",
    getInitialState: function () {
        return {
            // products:this.props.products.map(product=>Object.assign({selected:false},product))
            products: this.props.products
        }
    },
    propTypes: {
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string,
                price: React.PropTypes.number,
                url: React.PropTypes.string,
                quantity: React.PropTypes.number
            })
        )
    },
    onProductSelect: function (id, select) {
        var products = [...this.state.products];
        products.forEach(x => x.selected = x.id == id && select)
        this.setState({ products: products });
    },
    onRemoveProduct: function (id) {
        var product = this.state.products.find(x => x.id === id);
        if (product && confirm('Are you sure wnt to delete product: ' + product.name)) {
            var products = [...this.state.products];
            products = products.filter(x => x.id !== product.id)
            this.setState({ products: products });
        }
    },
    render: function () {
        var products = this.state.products.map(product => React.createElement(Product, { key: product.id, product: product, onRemoveProduct: this.onRemoveProduct, onProductSelect: this.onProductSelect }))
        return React.DOM.table({},
            React.DOM.thead({},
                React.DOM.tr({},
                    React.DOM.th({}, 'Name'), React.DOM.th({}, 'Price'), React.DOM.th({}, 'URL'), React.DOM.th({}, 'Quantity'), React.DOM.th({}, 'Control')
                ),
            ),
            React.DOM.tbody({}, products)
        );
    },
});