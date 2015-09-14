var React = require('react');
var PlanSearch = require('./PlanSearch.js');
var PlanTable = require('./PlanTable.js');
var Nav = require('../../base_js/Nav.js');
var Pagination = require('./Pagination.js');
var Crumb = require('../../base_js/Crumb.js')

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
			<div>
				<Nav activeName={'plan'}/>
				<Crumb navs={ this.state.navs }/>
				<PlanSearch />
				<div className="border1px mtb20"></div>
				<a href="/newPlan.htm" className="btn btn-info m10 mt0">发布</a>
				<PlanTable />
				<Pagination/>
			</div>
		);
	}

});

module.exports = PlanApp;