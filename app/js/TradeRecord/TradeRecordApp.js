var React = require('react');
var InputCanlerdar = require('../../base_js/InputCanlerdar.js');
var Crumb = require('../../base_js/Crumb.js');

var TradeRecordApp = React.createClass({
	getInitialState: function() {
		return {
			navs:{urls: [], current: '交易记录'},
			tableData:[]
		};
	},
	render: function() {
		return (
			<div className="container-fluid tradeRecord">
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

			    <div className="form-group">
			      <label htmlFor="">交易状态</label>
			      <select className="form-control" >
			        <option>11111111</option>
			        <option>22222222</option>
			        <option>33333333</option>
			        <option>44444444</option>
			        <option>55555555</option>
			      </select>
			    </div>
			    <div className="hr15"></div>

			    <div className="form-group">
			      <label htmlFor="">第三方支付状态</label>
			      <select className="form-control" >
			        <option>11111111</option>
			        <option>22222222</option>
			        <option>33333333</option>
			        <option>44444444</option>
			        <option>55555555</option>
			      </select>
			    </div>
			    <div className="form-group">
			      <label htmlFor="">交易类型</label>
			      <select className="form-control" >
			        <option>11111111</option>
			        <option>22222222</option>
			        <option>33333333</option>
			        <option>44444444</option>
			        <option>55555555</option>
			      </select>
			    </div>

			    <div className="form-group">
			      <label htmlFor="">交易时间</label>
			      <InputCanlerdar placeholder={'开始时间'} name={'startTime'}/>
			      <label className="m5">至</label>
			      <InputCanlerdar placeholder={'结束时间'} name={'endTime'}/>
			    </div>
			    <div className="hr15"></div>

			    <div className="form-group">
			      <label>      
			        <input type="checkbox" id="" />只显示需审批提现用户
			      </label>

			    </div>
			    <div className="form-group">
			      <a href="javascript:;" className="btn btn-primary m10">查询</a>
			      <a href="javascript:;" className="btn btn-default m10">重置</a>
			    </div>
			  </form>

				<div className="hr15"></div>
				<div className="border1px"></div>
				<div className="hr15"></div>
			  <button type="button" className="btn btn-primary mb20" data-toggle="modal" data-target="#myModal">批量提现</button>

			  <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			    <div className="modal-dialog" role="document">
			      <div className="modal-content">
			        <div className="modal-header">
			          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			          <h4 className="modal-title" id="myModalLabel">批量提现</h4>
			        </div>
			        <div className="modal-body">
			          你同意提现13笔，合计233,424.00元吗
			        </div>
			        <div className="modal-footer">
			          <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
			          <button type="button" className="btn btn-primary">确定</button>
			        </div>
			      </div>
			    </div>
			  </div>

				<div className="table-responsive">
			    <table className="table table-bordered">
			      <thead>
			        <tr>
			          <th><input type="checkbox" /></th>
			          <th>投资人</th>
			          <th>交易时间</th>
			          <th>交易类型</th>
			          <th>交易金额</th>
			          <th>银行卡</th>
			          <th>交易状态</th>
			          <th>第三方支付状态</th>
			          <th>原因</th>
			        </tr>
			      </thead>
			      <tbody>
			  			<tr>
			          <td><input type="checkbox" /></td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			        </tr>   
			      </tbody>
			    </table>
			  </div>

			</div>
		);
	}

});

module.exports = TradeRecordApp;