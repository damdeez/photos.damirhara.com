import React from 'react';

const ItemList = (props) => {
    let items = [];
    let loading = [];

    props.items.map((item, index) => {
      items.push(<li key={ index }><img src={ item } ></img></li>);
      loading = props.loading ? <div className="loading-label">Loading...</div> : '';
    });

    return (
      <div>
        {loading}
        <ul className="image-container">
          {items}
        </ul>
      </div>
    );
};

ItemList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default ItemList;
