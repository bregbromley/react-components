// // TODO
// var Cucumbers = () => (
//   <li>cucumbers</li>
// );

// var Kale = () => (
//   <li>kale</li>
// );

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>

// );

// var GroceryList = () => (
//   <div>
//     <GroceryListItem items={['cucumbers', 'kale']} />
//   </div>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));


// TODO
// var Cucumbers = () => (
//   <li>cucumbers</li>
// );

// var Kale = () => (
//   <li>kale</li>
// );

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>

// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super (props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style ={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.items}</li>
    );
  }
}



var GroceryList = (props) => (
  <div>
    <ul>
      {props.items.map(items =>
        <GroceryListItem items={items} />
        )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList items={['cucumber', 'kale', 'bread']} />, document.getElementById("app"));
