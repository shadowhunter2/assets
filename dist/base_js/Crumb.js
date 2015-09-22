var React = require('react');
var Link = require('react-router').Link;

var Crumb = React.createClass({

	render: function() {
		var navs = this.props.navs;
		var navArr = []

		for(var i=0; i<navs.urls.length; i++){
			navArr.push(
				<li key={'nav' + i}>
					<Link to={ navs.urls[i].url }>{ navs.urls[i].name }</Link>
				</li>
			);
		}

		return (
			<ol className="breadcrumb">
				<li><Link to="home">首页</Link></li>
				{navArr}
				<li className="active">{ navs.current }</li>
			</ol>
		);
	}

});

module.exports = Crumb;