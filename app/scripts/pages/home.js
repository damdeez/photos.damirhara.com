import React from 'react';
import ItemList from '../components/itemList';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    ItemActions.loadItems();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="main-container">
        {/* <h1>Home Area</h1> */}
        <ItemList { ...this.state } />
        {/* <img src="images/image1.jpg" /> */}
      </div>
    );
  }
}

export default Home;
