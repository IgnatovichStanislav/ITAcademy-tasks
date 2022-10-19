var Product = React.createClass({
    displayName: "Product",
    propTypes: {
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string,
        count: React.PropTypes.number.isRequired,
        price: React.PropTypes.number,
        pixUrl: React.PropTypes.string.isRequired
    },
    render: function () {
        var product = React.DOM.li({ className: 'Product' },
            React.DOM.div({ className: 'col-pix' },
                this.props.pixUrl ? React.DOM.div({ className: 'img' }, React.DOM.img({ src: this.props.pixUrl, alt: '/' })) : ' '
            )
            ,
            React.DOM.div({ className: 'col-name', title: this.props.description },
                React.DOM.a({ className: 'title', href: 'javascript:void(0);' }, this.props.name)),
            React.DOM.div({ className: 'col-count' },
                React.DOM.div({
                    className: 'status',
                    title: this.props.count,
                    style: { color: this.props.count > 0 ? '#17c7be' : '#FF4A13' }
                }, this.props.count > 0 ? 'In stock' : 'Not available')),
            React.DOM.div({ className: 'col-price' },
                React.DOM.div({ className: 'price' }, this.props.price ? `$${this.props.price}` : null)));

        return product;
    }
});