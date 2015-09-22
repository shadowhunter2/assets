var Router = require('react-router');
var React =require('react');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Redirect = Router.Redirect;

var PlanManage = require('./PlanManage');
var PropertyManage = require('./PropertyManage');
var Home = require('./Home');
var TradeRecod = require('./TradeRecord');
var NewPlan = require('./NewPlan');
var InvestManage = require('./InvestManage');
var InvesterManage = require('./InvesterManage');
var InvestDetail = require('./InvestDetail');
var PlanDetail = require('./PlanDetail');

var App = React.createClass({
  render:function() {
    return (
      <div>
        <div className="nav-menu">
          <div className="sub-menu">
            <Link to="home">首页</Link>
            <div  className="sub2-menu">
              <Link to="propertyManage">资产管理</Link>
              <Link to="tradeRecod">交易记录</Link>
            </div>
          </div>
          <div  className="sub-menu">
            <Link to="planManage">投资理财计划</Link>
            <div  className="sub2-menu">
              <Link to="newPlan">发布</Link>
            </div>
          </div>
          <div  className="sub-menu">
            <Link to="investManage">投资管理</Link>
          </div>
          <div  className="sub-menu">
            <Link to="investerManage">投资人管理</Link>
          </div>
        </div>

        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    )
  }
});

var routes = (
   <Route handler={App}>
    <Route name="home" handler={Home} />
    <Route name="propertyManage" handler={PropertyManage} />
    <Route name="tradeRecod" handler={TradeRecod} />
    <Route name="planManage" handler={PlanManage} />
    <Route name="planDetail" path="/planDetail/:id" handler={PlanDetail} />
    <Route name="newPlan" handler={NewPlan} />
    <Route name="investManage" handler={InvestManage} />
    <Route name="investDetail" path="/investDetail/:id" handler={InvestDetail} />
    <Route name="investerManage" handler={InvesterManage} />
    <Redirect to="home" />
  </Route>
);

Router.run(routes, function(Root){
  
  React.render(<Root/>, document.body);
});
















