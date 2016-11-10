// Main.jsx file

// Data to pass to our List elements
var employeeData = [
    {name:"Joan", title:"developer", salary:100000},
    {name:"Enrique", title:"manager", salary:200000},
    {name:"Shana", title:"developer", salary:105000},
    {name:"Shana", title:"manager", salary:105000},
];

// Simple ListItem component for showing an <li>
var Employee = React.createClass({
    render:function() {
        return(<tr className={this.props.title}>
            <td>{this.props.name}</td>
            <td>{this.props.title}</td>
            <td>{this.props.salary}</td>
        </tr>)
    }
});

// EmployeeTable
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
                        {this.props.data.map(function(d, i){
                            return <Employee key={'employee-' + i}
                                             name={d.name}
                                             salary={d.salary}
                                             title={d.title}
                                />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});

// EmployeeSearch
var EmployeeSearch = React.createClass({
    getInitialState:function() {
        return({searchString:''});
    },

    // Add a filter funciton
    filter:function(event){
        var value = event.target.value;
        this.setState({searchString:value});
    },

    render:function() {
        var employees = this.props.data;

        // Use this.state.searchString to filter down the `employees` array
        employees = employees.filter(function(elem) {
            var val = this.state.searchString.bind(this);
            return elemttps://drscdn.500px.org/photo/133812917/m%3D2048/d7dab63e94897ec0ede8d33f5fdbb33f.name.includes(val) || elem.salary.includes(val) || elem.title.includes(val);
        })

        return(
            <div>
                <input placeholder="Search employees" onChange={this.filter} />
                <EmployeeTable data={employees}/>
            </div>
        )
    }
});


// Render your component in the `main` section
ReactDOM.render(<EmployeeSearch data={employeeData}/>,
    document.querySelector('main')
);
