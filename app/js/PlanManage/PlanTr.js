var React = require('react');
var RecPay = require('./RecPay.js');
var Link = require('react-router').Link;

var PlanTr = React.createClass({
	render: function() {
		return (
			<tr>
                <td><Link to="planDetail" params={{id:22}}>2222222</Link></td>
                <td>asd飞</td>
                <td>asd飞</td>
                <td>asd飞</td>
                <td>asd飞</td>
                <td>asd飞</td>
                <td>asd飞</td>
                <td>asd飞</td>
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
        		          <li><RecPay /></li>
        		          <li><a href="javascript:;">审核</a></li>
        		          <li><a href="javascript:;">审核</a></li>
        		          <li><a href="javascript:;">审核</a></li>
        		        </ul>
        		      </div>
                </td>
            </tr>
		);
	}

});

module.exports = PlanTr;