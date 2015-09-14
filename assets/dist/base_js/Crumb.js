var React = require('react');

var Crumb = React.createClass({

	render: function() {
		var navs = this.props.navs;
		var navArr = []

		for(var i=0; i<navs.urls.length; i++){
			navArr.push(<li key={'nav' + i}><a href={ navs.urls[i].url }>{ navs.urls[i].name }</a></li>)
		}

		return (
			<ol className="breadcrumb">
				<li><a href="/index.htm">首页</a></li>
				{navArr}
				<li className="active">{ navs.current }</li>
			</ol>
		);
	}

});

module.exports = Crumb;