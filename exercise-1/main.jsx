// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({
    // In your render function...
	render:function() {
        // Set variables `name` and `interest`
		var name = "Tiffany";
		var interest = "Coding";

        // Return div with two paragraphs
        return(
        	<div>
        		<p>{name}</p>
        		<p>{interest}</p>
        	</div>
        )
	}
});

ReactDOM.render(<MyComponent/>,
	document.querySelector('main')
);
