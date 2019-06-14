import React from 'react';
import { connect } from 'react-redux';
import GameListItem from './GameListItem';
import selectGames from '../selectors/games';

const GamesList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Game</div>
      <div className="show-for-desktop">Game</div>
      <div className="show-for-desktop">Platform</div>
    </div>
    <div className="list-body">
      {props.games.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No games listed. Add one!</span>
        </div>
      ) : (
        props.games.map((game) => {
          return <GameListItem key={game.id} {...game} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    games: selectGames(state.games, state.filters)
  };
};

export default connect(mapStateToProps)(GamesList);
