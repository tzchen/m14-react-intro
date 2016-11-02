// Main.jsx file

// Data to pass into our parent component
var employeeData = [
    {name:"Joan", title:"developer", salary:100000},
    {name:"Enrique", title:"manager", salary:200000},
    {name:"Shana", title:"developer", salary:105000},
    {name:"Shana", title:"manager", salary:105000},
];

// Create an EmployeeRow element to render a row of information for an employee
var EmployeeRow = React.createClass({
    // Define rendering function
    render:function() {
    	return(
    		<tr>
    			<td>{this.props.name}</td>
    			<td>{this.props.title}</td>
    			<td>{this.props.salary}</td>
    		</tr>
    	);
    }
});

// Create an EmployeeTable element in which to render your EmployeeRows
var EmployeeTable = React.createClass({
    render:function() {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Salary</th>
                        </tr>


                        {// Enter employee rows here!!!!
                        	this.props.data.map(function(employee, index){
                        		return <Employee key={'employee-' + index}
                        				name={employee.name}
                        				title={employee.title}
                        				salary={employee.salary}
                        		/>
                        	})
                        }


                    </tbody>
                </table>
            </div>
        );
    }
});

// Render your component in the `main` section
ReactDOM.render(<EmployeeTable data={employeeData}/>,
	document.querySelector('main'));