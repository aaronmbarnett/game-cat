import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectGames from '../selectors/games';

export const GamesSummary = ({ gamesCount }) => {
  const gamePlurality = gamesCount === 1 ? 'game' : 'games';

  return (
    <div className="content-container">
      <div className="summary-add">
        <h1 className="page-header__title">
          Viewing <span>{gamesCount}</span> {gamePlurality}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add A Game!
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleGames = selectGames(state.games, state.filters);

  return {
    gamesCount: visibleGames.length
  };
};

export default connect(mapStateToProps)(GamesSummary);
