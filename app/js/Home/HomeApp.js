var React = require('react');

var HomeApp = React.createClass({

	render: function() {
		return (
				<div className="container-fluid home">
					<div className="row page-header">
					  <div className="col-md-3 pl20">
					  	<h4>在贷款(元)</h4>
					  	<span className="money">3000</span>
					  </div>
					  <div className="col-md-3 pl20">
					  	<h4>在贷款(元)</h4>
					  	<span className="money">3000</span>
					  </div>
					  <div className="col-md-3 pl20">
					  	<h4>在贷款(元)</h4>
					  	<span className="money">3000</span>
					  </div>
					  <div className="col-md-3 pl20">
					  	<h4>在贷款(元)</h4>
					  	<span className="money">3000</span>
					  </div>
					</div>

					<h4 className="h-title">资产概况：</h4>
					<ul className="nav nav-tabs">
				    <li role="presentation" className="active"><a href="javascript:;">今天</a></li>
				    <li role="presentation"><a href="javascript:;">本周</a></li>
				    <li role="presentation"><a href="javascript:;">本月</a></li>
				    <li role="presentation"><a href="javascript:;">本季</a></li>
				    <li role="presentation"><a href="javascript:;">本年</a></li>
				    <li role="presentation" className="dropdown">
				      <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:;" role="button" aria-haspopup="true" aria-expanded="false">
				        选择日期 <span className="caret"></span>
				      </a>
				      <ul className="dropdown-menu">
				        <li><a href="javascript:;">111</a></li>
				        <li><a href="javascript:;">222</a></li>
				        <li><a href="javascript:;">333</a></li>
				      </ul>
				    </li>
				  </ul>
				  <div className="hr15"></div>
				  <table className="table table-bordered">
				      <thead>
				        <tr>
				          <th>#</th>
				          <th>First Name</th>
				          <th>Last Name</th>
				          <th>Username</th>
				        </tr>
				      </thead>
				      <tbody>
				        <tr>
				          <th scope="row">1</th>
				          <td>Mark</td>
				          <td>Otto</td>
				          <td>@mdo</td>
				        </tr>
				        <tr>
				          <th scope="row">2</th>
				          <td>Jacob</td>
				          <td>Thornton</td>
				          <td>@fat</td>
				        </tr>
				        <tr>
				          <th scope="row">3</th>
				          <td>Larry</td>
				          <td>the Bird</td>
				          <td>@twitter</td>
				        </tr>
				      </tbody>
				    </table>

				    <h4 className="h-title">用户概况：</h4>
					<ul className="nav nav-tabs">
				    <li role="presentation" className="active"><a href="javascript:;">今天</a></li>
				    <li role="presentation"><a href="javascript:;">本周</a></li>
				    <li role="presentation"><a href="javascript:;">本月</a></li>
				    <li role="presentation"><a href="javascript:;">本季</a></li>
				    <li role="presentation"><a href="javascript:;">本年</a></li>
				    <li role="presentation" className="dropdown">
				      <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:;" role="button" aria-haspopup="true" aria-expanded="false">
				        选择日期 <span className="caret"></span>
				      </a>
				      <ul className="dropdown-menu">
				        <li><a href="javascript:;">111</a></li>
				        <li><a href="javascript:;">222</a></li>
				        <li><a href="javascript:;">333</a></li>
				      </ul>
				    </li>
				  </ul>
				  <div className="hr15"></div>
				  <table className="table table-bordered">
				      <thead>
				        <tr>
				          <th>#</th>
				          <th>First Name</th>
				          <th>Last Name</th>
				          <th>Username</th>
				        </tr>
				      </thead>
				      <tbody>
				        <tr>
				          <th scope="row">1</th>
				          <td>Mark</td>
				          <td>Otto</td>
				          <td>@mdo</td>
				        </tr>
				        <tr>
				          <th scope="row">2</th>
				          <td>Jacob</td>
				          <td>Thornton</td>
				          <td>@fat</td>
				        </tr>
				        <tr>
				          <th scope="row">3</th>
				          <td>Larry</td>
				          <td>the Bird</td>
				          <td>@twitter</td>
				        </tr>
				      </tbody>
				    </table>

				    <h4 className="h-title">用户质量：</h4>
					<ul className="nav nav-tabs">
				    <li role="presentation" className="active"><a href="javascript:;">今天</a></li>
				    <li role="presentation"><a href="javascript:;">本周</a></li>
				    <li role="presentation"><a href="javascript:;">本月</a></li>
				    <li role="presentation"><a href="javascript:;">本季</a></li>
				    <li role="presentation"><a href="javascript:;">本年</a></li>
				    <li role="presentation" className="dropdown">
				      <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:;" role="button" aria-haspopup="true" aria-expanded="false">
				        选择日期 <span className="caret"></span>
				      </a>
				      <ul className="dropdown-menu">
				        <li><a href="javascript:;">111</a></li>
				        <li><a href="javascript:;">222</a></li>
				        <li><a href="javascript:;">333</a></li>
				      </ul>
				    </li>
				  </ul>
				  <div className="hr15"></div>
				  <table className="table table-bordered">
				      <thead>
				        <tr>
				          <th>#</th>
				          <th>First Name</th>
				          <th>Last Name</th>
				          <th>Username</th>
				        </tr>
				      </thead>
				      <tbody>
				        <tr>
				          <th scope="row">1</th>
				          <td>Mark</td>
				          <td>Otto</td>
				          <td>@mdo</td>
				        </tr>
				        <tr>
				          <th scope="row">2</th>
				          <td>Jacob</td>
				          <td>Thornton</td>
				          <td>@fat</td>
				        </tr>
				        <tr>
				          <th scope="row">3</th>
				          <td>Larry</td>
				          <td>the Bird</td>
				          <td>@twitter</td>
				        </tr>
				      </tbody>
				    </table>

					
				</div>
		);
	}

});

module.exports = HomeApp;