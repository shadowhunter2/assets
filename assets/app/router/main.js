var Router = require('react-router');
var React =require('react')
var Route = Router.Route;

var About = React.createClass({
	render:function(){
		return (
				<div>about</div>
		)
	}
})

var Inbox = React.createClass({
	render:function(){
		return (
				<div>Inbox</div>
		)
	}
})

var routes = (
  <Route handler={App}>
    <Route path="about" handler={About}/>
    <Route path="inbox" handler={Inbox}/>
  </Route>
);

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render:function() {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    )
  }
});

Router.run(routes, Router.HistoryLocation, function(Root){
  React.render(<Root/>, document.body);
});