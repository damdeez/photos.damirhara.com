import Reflux from 'reflux';

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']}
});

const path = 'images/';

ItemActions.loadItems.listen(() => {
  //setTimeout(() => {
    const items = [ path + 'image1.jpg', path + 'image2.jpg', path + 'image3.jpg', path + 'image4.jpg', path + 'image5.jpg'];

    ItemActions.loadItems.completed(items);

    //if not using arrow functions
    //this.completed(items);
    //console.log('this', this);

    // on error
    // this.failed('an error occured');
  //}, 1000);
});

export default ItemActions;
