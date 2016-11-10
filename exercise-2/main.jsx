// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({
    // In your render function...
	render:function() {
        // Return div with two paragraphs
        return(
			<div>
				<p>Hello, my name is {this.props.name}</p>
				<p>I am interested in {this.props.interest}</p>
			</div>
        )
	}
})


// Render your component in the `main` section
ReactDOM.render(<MyComponent/> name="Tiffany" interest="Coding"/>, 
	document.querySelector('main')
);
