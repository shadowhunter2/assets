var React = require('react');
var InputCanlerdar = require('../../base_js/InputCanlerdar.js');
var Crumb = require('../../base_js/Crumb.js');
var Link = require('react-router').Link;

var InvestManageApp = React.createClass({
	getInitialState: function() {
		return {
			navs:{urls: [], current: '投资管理'},
			tableData:[]
		};
	},
	render: function() {
		return (
			<div className="container-fluid investManage">
				<Crumb navs={this.state.navs}/>

				<form className="form-inline" onsubmit="return false;">
			    <div className="form-group">
			      <label htmlFor="">姓名</label>
			      <input type="text" className="form-control" id="" />
			    </div>
			    <div className="form-group">
			      <label htmlFor="">手机</label>
			      <input type="text" className="form-control" id="" />
			    </div>

			    <div className="hr15"></div>

			    <div className="form-group">
			      <label htmlFor="">购买时间</label>
			      <InputCanlerdar placeholder={'开始时间'} name={'startTime'}/>
			      <label className="m5">至</label>
			      <InputCanlerdar placeholder={'结束时间'} name={'endTime'}/>
			    </div>
			    <div className="form-group">
			      <label htmlFor="">理财标题计划</label>
			      <input type="text" className="form-control" id="" />
			    </div>

			    <div className="hr15"></div>
			    
			    <div className="form-group">
			      <a href="javascript:;" className="btn btn-primary ml15">查询</a>
			      <a href="javascript:;" className="btn btn-default m10">重置</a>
			    </div>
			  </form>


				<div className="hr15"></div>
				<div className="border1px"></div>
				<div className="hr15"></div>

				<div className="table-responsive">
			    <table className="table table-bordered">
			      <thead>
			        <tr>
			          <th><input type="checkbox" /></th>
			          <th>投资人</th>
			          <th>购买时间</th>
			          <th>计划还款时间</th>
			          <th>理财计划</th>
			          <th>基本收益率（%）</th>
			          <th>加速收益率（%）</th>
			          <th>投资本金（元）</th>
			          <th>应还利息（元）</th>
			          <th>操作</th>
			        </tr>
			      </thead>
			      <tbody>
			  			<tr>
			          <td><input type="checkbox" /></td>
			          <td><Link to="investDetail" params={{id:6}}>shadowhunter</Link></td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td><button className="btn btn-link">查看合同</button></td>
			        </tr>   
			      </tbody>
			    </table>
			  </div>

			</div>
		);
	}

});

module.exports = InvestManageApp;