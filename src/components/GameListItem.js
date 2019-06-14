import React from 'react';
import { Link } from 'react-router-dom';

const GameListItem = ({ id, title, platform, release, genre }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{title}</h3>
      <span className="list-item__sub-title">
        {release}
        {' | '}
        {genre}
      </span>
    </div>

    <h3 className="list-item__data">{platform}</h3>
  </Link>
);

export default GameListItem;
