var Product = React.createClass({
    displayName: 'Product',
    onRowClick: function (e) {
        console.log('dataset: ', e.target.parentElement.dataset.productId, ', prop: ', this.props.product.id);
        this.props.onProductSelect(!this.props.selected ? this.props.product.id : null);
    },
    onRemoveButtonClick: function (e) {
        e.stopPropagation();
        this.props.onRemoveProduct(this.props.product.id);
    },
    render: function () {
        return React.DOM.tr({
            className: this.props.selected ? 'selected' : '',
            onClick: this.onRowClick,
            'data-product-id': this.props.product.id
        },
            React.DOM.td({}, this.props.product.name),
            React.DOM.td({}, this.props.product.price),
            React.DOM.td({}, this.props.product.url),
            React.DOM.td({}, this.props.product.quantity),
            React.DOM.td({},
                React.DOM.button({ onClick: this.onRemoveButtonClick }, "Delete"))
        )
    }
});