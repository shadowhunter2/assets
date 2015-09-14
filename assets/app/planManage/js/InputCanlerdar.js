var React = require('react');
var Calendar = require('rc-calendar');
var DatePicker = require('rc-calendar/lib/Picker.js');
var zhCn = require('gregorian-calendar/lib/locale/zh-cn');
var DateTimeFormat = require('gregorian-calendar-format');
var GregorianCalendar = require('gregorian-calendar');
var CalendarLocale = require('rc-calendar/lib/locale/zh-cn');

var InputCanlerdar = React.createClass({
	onOpenChange:function(e) {
    this.setState({
      open: e.open
    });
  },

  toggle:function() {
    this.setState({
      open: !this.state.open
    });
  },

  handleCalendarSelect:function(value) {
    this.setState({
      time: Date.now()
    });
  },

  getDefaultProps:function() {
    return {
      formatter: new DateTimeFormat('yyyy-MM-dd'),
      showTime:false,
      name:'',
      placeholder:''
    };
  },

  getInitialState:function() {
    var value = new GregorianCalendar(zhCn);
    value.setTime(Date.now());
    return {
      time: Date.now(),
      showTime: true,
      open: false,
      value: value,
      showDefault:false,
      placeholder:''
    };
  },

  handleShowTimeChange:function(e) {
    this.setState({
      showTime: e.target.checked
    });
  },

  render:function() {
    var state = this.state;
    var calendar = <Calendar locale={CalendarLocale}
                     orient={['bottom', 'left']}
                     showTime={this.props.showTime} onSelect={this.handleCalendarSelect}/>;
		var objStyle = {marginLeft:'10px', cursor: "pointer"};                     
    return (
    	<div className="input-group">
         <DatePicker formatter={this.props.formatter}
                    calendar={calendar}
                    open={this.state.open}
                    onOpen={this.onOpenChange}
                    onClose={this.onOpenChange}>
          <input type="text" 
          	className="form-control" 
          	style={objStyle} 
          	name={this.props.name} 
          	placeholder={this.props.placeholder}/>
        </DatePicker>
        <span className="input-group-addon" onClick={this.toggle}>
          <span className="glyphicon glyphicon-calendar"></span>
        </span>
      </div>

    )
      
  }
});

module.exports = InputCanlerdar;