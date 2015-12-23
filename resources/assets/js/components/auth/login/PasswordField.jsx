var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	    	value: ""
	    };
	},
	onChange: function(e) {
		this.setState({
      value: e.target.value
    });
	},
	render: function() {
		return(
			<div className="input-field">
				<input type="password"
					value={this.state.value}
					onChange={this.onChange}
          id="password"
					required
				/>
				<label htmlFor="password">Password</label>
			</div>
		);
	}
});
