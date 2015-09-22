var React = require('react');
var Crumb = require('../../base_js/Crumb.js');

var InvestDetailApp = React.createClass({
	getInitialState: function() {
		return {
			navs:{urls: [{url:'investManage',name:'投资管理'}], current: '投资详情'},
			tableData:[]
		};
	},
	render: function() {
		return (
			<div className="container-fluid investDetail">
				<Crumb navs={this.state.navs}/>

			  <div className="row detail-header">
			    <div className="col-md-11">目前投资状态为   待还款   请在  2015-08-24    10：00 号之前 完成还款</div>
			    <div className="col-md-1">查看合同</div>
			  </div>

				<div className="row">
			    <div className="col-md-4">1</div>
			    <div className="col-md-4">2</div>
			    <div className="col-md-4">3</div>
			    <div className="col-md-4">4</div>
			    <div className="col-md-4">5</div>
			    <div className="col-md-4">6</div>
			  </div>
			</div>
		);
	}

});

module.exports = InvestDetailApp;