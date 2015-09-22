var React = require('react');
var Dialog = require('rc-dialog');

var RecPay = React.createClass({
	handleRecPay:function(e){
		e.preventDefault();
		this.setState({
      visible:true,
    });
	},
	getInitialState: function() {
		return {
			visible: false
		};
	},
	onClose:function(){
		this.setState({
			visible: false,
    });
	},
	render: function() {
		var dialog;
    if(this.state.visible){
      dialog= <Dialog visible={this.state.visible}
              animation="zoom"
              maskAnimation="fade"
              onClose={this.onClose}
              style={{zIndex:10000000,width:'600px'}} 
              title={'回款'}>
              <p style={{padding:'0 30px',lineHeight:'30px'}}>
              	自动理财计划60-0001期，于 2015-09-24 到期，累计投资1234笔，合计支付本金+收益：20,123,456.00元 
              </p>
              <div className="modal-footer" data-reactid=".0.4.0.1.0.0.2">
              	<button type="button" className="btn btn-default" onClick={this.onClose}>取消</button>
              	<button type="button" className="btn btn-primary" >确定</button>
              </div>
      </Dialog>;
    }
		return (
			<div>
				<a href="#" onClick={this.handleRecPay}>回款</a>
				{dialog}
			</div>
		);
	}
});

module.exports = RecPay;