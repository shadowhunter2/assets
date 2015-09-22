var React = require('react');
var PlanSearch = require('./PlanSearch.js');
var PlanTable = require('./PlanTable.js');
var Pagination = require('./Pagination.js');
var Crumb = require('../../base_js/Crumb.js');
var Link = require('react-router').Link;

var PlanApp = React.createClass({
	getInitialState: function() {
		return {
			navs:{urls: [], current: '投资理财计划'},
			tableData:[]
		};
	},
	componentDidMount: function() {

	},
	render: function() {
		return (
			<div className="container-fluid planManage">
				<Crumb navs={ this.state.navs }/>
				<PlanSearch />
				<div className="border1px mtb20"></div>
				<Link  to="newPlan" className="btn btn-info mb20 mt0">发布</Link>
				<PlanTable />
				<Pagination/>
			</div>
		);
	}

});

module.exports = PlanApp;