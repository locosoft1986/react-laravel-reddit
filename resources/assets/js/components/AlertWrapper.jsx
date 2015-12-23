var React = require('react');

var AlertItem = require('./AlertItem.jsx');

module.exports = React.createClass({
	render: function() {
		var alertClass = this.props.alertType ? "alert alert-" + this.props.alertType : "alert alert-info";
		var alerts = this.props.alerts.map(function(item) {
			return <AlertItem text={item.error} key={item.id} />
		});
		var alertStyle = (alerts.length != 0) ? { height: "auto" } : {"display" : "none"};
		return(
			<div className={alertClass} style={alertStyle}>
				<ul>
					{alerts}
				</ul>
			</div>
		);
	}
});
