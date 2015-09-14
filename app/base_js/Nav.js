var React = require('react');

var Nav = React.createClass({
	componentDidMount: function() {
		var activeName = this.props.activeName;
		var aLi = this.refs.crumb.getDOMNode().children;
		for(var i=0; i<aLi.length; i++){
			if($(aLi[i]).hasClass(activeName)){
				$(aLi[i]).addClass('active');
			}
		}
	},
	render: function() {
		return (
			<ul ref="crumb" className="nav nav-tabs nav-justified">
			  <li role="presentation" className="home"><a href="/index.htm">首页</a></li>
			  <li role="presentation" className="property"><a href="/propertyManage.htm">资产管理</a></li>
			  <li role="presentation" className="plan"><a href="/planManage.htm">理财计划管理</a></li>
			  <li role="presentation" className="invest"><a href="/investManage.htm">投资管理</a></li>
			  <li role="presentation" className="investor"><a href="/investManage.htm">投资人管理</a></li>
			</ul>
		);
	}
});

module.exports = Nav;