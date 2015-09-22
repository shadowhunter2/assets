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
      formatter:  new DateTimeFormat('yyyy-MM-dd HH:mm'),
      showTime:true,
      name:'',
      placeholder:''
    };
  },

  getInitialState:function() {
    var value = new GregorianCalendar(zhCn);
    value.setTime(Date.now());
    return {
      time: Date.now(),
      open: false,
      value: value,
      showDefault:false
    };
  },

  handleCalendarOk: function(value) {
    this.setState({
      time: Date.now(),
      value: value
    });
  },

  render:function() {
    var state = this.state;

    var calendar = <Calendar locale={CalendarLocale}
                     defaultValue={state.value}
                     orient={['bottom', 'left']}
                     showTime={this.props.showTime} 
                     showOk={true}
                     onOk={this.handleCalendarOk}
                     isShow22={true}
                     onSelect={this.handleCalendarSelect} />;
                     
		var objStyle = {marginLeft:'10px', cursor: "pointer"};  
    return (
    	<div className="input-group">
         <DatePicker formatter={this.props.formatter}
                    calendar={calendar}
                    open={this.state.open}
                    onOpen={this.onOpenChange}
                    animation="slide-up"
                    onClose={this.onOpenChange}>
          <input type="text" 
          	className="form-control" 
          	style={objStyle} 
          	name={this.props.name} 
            placeholder="请选择日期"/>
        </DatePicker>
      </div>

    )
      
  }
});

module.exports = InputCanlerdar;