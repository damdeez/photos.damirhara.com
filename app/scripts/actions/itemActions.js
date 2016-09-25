import Reflux from 'reflux';

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']}
});

const path = 'images/';

ItemActions.loadItems.listen(function(){
  //setTimeout(() => {
    const items = [ path + 'image1.jpg', path + 'image2.jpg', path + 'image3.jpg', path + 'image4.jpg', path + 'image5.jpg'];
    this.completed(items);

    // on error
    // this.failed('an error occured');
  //}, 1000);
});

export default ItemActions;
