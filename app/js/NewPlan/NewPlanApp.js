var React = require('react');
var InputCanlerdar = require('../../base_js/InputCanlerdar.js');
var Crumb = require('../../base_js/Crumb.js');
var _u = require('../../base_js/utils.js')

var NewPlanApp = React.createClass({
	getInitialState: function() {
		return {
			navs:{urls: [], current: '发布'},
			tableData:[]
		};
	},
	componentDidMount: function() {
		
	},
	pushForm:function(){
		var data = _u.getFormData($('#newPlanForm'));
		_u._ajax('finPlan/addFinPlan.htm',data,function(d){
			alert('成功')
		},function(err){
			alert('success不是1')
		})
	},
	render: function() {
		return (
			<div className="container-fluid newPlan">
				<Crumb navs={this.state.navs}/>

				<div className="hr15"></div>
			  <form className="form-inline" onsubmit="return false;" id="newPlanForm">
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
						    <label htmlFor="">计划募集金额：</label>
						    <input type="text" className="form-control" name="planRaiseMoney"/>元
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">基本收益：</label>
						    <input type="text" className="form-control" name="basicRate"/>%
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">计划募集开始时间：</label>
						    <InputCanlerdar name={'planRaiseStartDate'}/>
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">计划募集结束时间：</label>
						    <InputCanlerdar name={'planRaiseEndDate'}/>
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">计划还款时间</label>
						    <InputCanlerdar name={'planRepaymentDate'}/>
						    <br/>
						    <label htmlFor=""></label>  <span className="m5 grey">理财周期60天</span>
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">产品期限：</label>
						    <input type="text" className="form-control" name="finTerm" defaultValue="15"/>天
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">还款方式：</label>
						    <select className="form-control" name="repaymentStatus" defaultValue="1">
								  <option value="1">到期本息还款</option>
								  <option value="2">22222222</option>
								  <option value="3">33333333</option>
								  <option value="4">44444444</option>
								  <option value="5">55555555</option>
								</select>
						  </div>
						  <div className="hr1"></div>
							
						</div>

						<div className="col-md-6">
							<div className="form-group">
							    <label htmlFor="">手续费：</label>
							    <label className="radio-inline">
									  <input type="radio" name="formalitiesStatus" value="2" defaultChecked/> 无
									</label>
									<label className="radio-inline">
									  <input type="radio" name="formalitiesStatus" value="1"/> 有
									</label>
							  </div>
							  <div className="hr1"></div>
							  
								<div className="form-group">
							    <label htmlFor="">支持提前回款：</label>
							    <label className="radio-inline">
									  <input type="radio" name="advanceRepayment" value="2" defaultChecked/> 否
									</label>
									<label className="radio-inline">
									  <input type="radio" name="advanceRepayment" value="1"/> 是
									</label>
							  </div>
							  <div className="hr1"></div>
							  
								<div className="form-group">
							    <label htmlFor="">起购金额：</label>
							    <input type="text" className="form-control" name="minMoney"/>元
							  </div>
							  <div className="hr1"></div>
							  
								<div className="form-group">
							    <label htmlFor="">购买金额上限：</label>
							    <input type="text" className="form-control" name="maxMoney"/>元
							  </div>
							  <div className="hr1"></div>

							  <div className="form-group">
							    <label htmlFor="">个人购买总金额上限：</label>
							    <input type="text" className="form-control" name="personMaxMoney"/>元
							  </div>
							  <div className="hr1"></div>
							  
								<div className="form-group">
							    <label htmlFor="">起息时间：</label>
							     <select className="form-control" name="interestType" defaultValue="1">
									  <option value="1">次日起息</option>
									  <option value="2">22222222</option>
									  <option value="3">33333333</option>
									  <option value="4">44444444</option>
									  <option value="5">55555555</option>
									</select>
							  </div>

							  <div className="hr45"></div>

							  <div className="form-group">
						 			<button type="button" className="btn btn-primary m10" onClick={this.pushForm}>确定</button>
							  </div>
						</div>
							
				  </div>
				</form>
			</div>
		);
	}

});

module.exports = NewPlanApp;