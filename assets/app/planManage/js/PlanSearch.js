var React = require('react');
var InputCanlerdar = require('./InputCanlerdar.js');

var PlanSearch = React.createClass({

	render: function() {
		return (
			<form className="form-inline ml15" onsubmit="return false;">
			  <div className="form-group">
			    <label htmlFor="planTitle">理财计划标题</label>
			    <input type="text" className="form-control" id="planTitle" placeholder="理财计划标题" />
			  </div>
			  <div className="form-group">
			    <label htmlFor="state">状态</label>
			    <select className="form-control" id="planState">
					  <option>11111111</option>
					  <option>22222222</option>
					  <option>33333333</option>
					  <option>44444444</option>
					  <option>55555555</option>
					</select>
			  </div>
				<div className="form-group">
			    <label htmlFor="">计划还款时间</label>
			    <InputCanlerdar placeholder={'开始时间'} name={'startTime'}/>
			    <label className="m5">至</label>
			    <InputCanlerdar placeholder={'结束时间'} name={'endTime'}/>
			  </div>
			  <div className="form-group">
				  <a href="javascript:;" className="btn btn-primary m10">查询</a>
				  <a href="javascript:;" className="btn btn-default m10">重置</a>
			  </div>
			</form>
		);
	}

});

module.exports = PlanSearch;