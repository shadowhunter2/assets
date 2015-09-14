var React = require('react');
var PlanTr = require('./PlanTr.js');

var PlanTable = React.createClass({
	getInitialState: function() {
		return {
			data:[] 
		};
	},
	componentDidMount: function() {
		
	},
	render: function() {
		var trArr = [];
		for(var i=0;i< 5; i++){
			trArr.push(<PlanTr key={'tr'+ i}/>);
		}

		return (
			<div className="table-responsive">
	      <table className="table table-bordered">
	        <thead>
	          <tr>
	            <th>理财计划标题</th>
	            <th>基本收益（%）</th>
	            <th>购买人数</th>
	            <th>投资笔数</th>
	            <th>人均客单(元)</th>
	            <th>计划募集金额（元）</th>
	            <th>实际募集金额（元）</th>
	            <th>完成率（%）</th>
	            <th>计划募集开始时间</th>
	            <th>计划募集结束时间</th>
	            <th>理财周期（天）</th>
	            <th>计划还款时间</th>
	            <th>实际支付利息（元）</th>
	            <th>状态</th>
	            <th className="text-center">操作</th>
	          </tr>
	        </thead>
	        <tbody>
	          {trArr}
	        </tbody>
	      </table>
	    </div>
		);
	}

});

module.exports = PlanTable;