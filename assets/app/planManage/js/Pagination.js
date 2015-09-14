var React = require('react');
var Page = require('rc-pagination');

var Pagination = React.createClass({

	onChange:function(n){
		console.log(n)
	},

	render: function() {
		return (
				<Page className="ant-pagination" onChange={this.onChange} total={450} />
		);
	}

});

module.exports = Pagination;