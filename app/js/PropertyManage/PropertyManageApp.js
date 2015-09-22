var React = require('react');
var Crumb = require('../../base_js/Crumb.js');

var PmApp = React.createClass({
	getInitialState: function() {
		return {
			navs:{urls: [], current: '资产管理'},
			tableData:[]
		};
	},
	render: function() {
		return (
			<div className="container-fluid propertyManage">
				<Crumb navs={this.state.navs}/>

				<form className="form-inline" onsubmit="return false;">
				  <div className="form-group">
				    <label htmlFor="">姓名</label>
				    <input type="text" className="form-control" id=""  />
				  </div>

				  <div className="form-group">
				    <label htmlFor="">手机</label>
				    <input type="text" className="form-control" id=""  />
				  </div>
					
				  <div className="form-group">
					  <a href="javascript:;" className="btn btn-primary m10">查询</a>
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
			          <th>总资产</th>
			          <th>账户余额（元）</th>
			          <th>在投资产（元）</th>
			          <th>当收收益（元）</th>
			          <th>累计收益（元）</th>
			          <th>操作</th>
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
			          <td>
			          	<div className="btn-group">
			  		        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			  		          操作 <span className="caret"></span>
			  		        </button>
			  		        <ul className="dropdown-menu">
			  		          <li><a href="javascript:;">审核</a></li>
			  		          <li><a href="javascript:;">审核</a></li>
			  		          <li><a href="javascript:;">审核</a></li>
			  		        </ul>
			  		      </div>
			          </td>
			        </tr>   
			      </tbody>
			    </table>
			  </div>

			</div>
		);
	}

});

module.exports = PmApp;