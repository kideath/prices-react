var React = require('react');
var SearchPlugin = require('./SearchPlugin.jsx');
 
class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items3};
                           
        this.filterList = this.filterList.bind(this);
    }
              
    filterList(text){
        var filteredList = this.props.data.items3.filter(function(item){
            return item[1].toLowerCase().search(text.toLowerCase())!== -1;
        }); 
        this.setState({items: filteredList});
    }
               
    render() {
        return(
            <div>         
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <table>
                    {
                        this.state.items.map(function(item){
                            return <tr>
                                <td><img src={item[0]} width='24' height='24'/></td>
                                <td>{item[1]}</td></tr>
                        })
                    }
                </table>
            </div>);
    }
}
 
module.exports = ItemsList;