import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameForm from '../components/GameForm';
import { startAddGame } from '../actions/games';

export class AddGamePage extends Component {
  onSubmit = (game) => {
    this.props.startAddGame(game);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add a Game</h1>
          </div>
        </div>
        <div className="content-container">
          <GameForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddGame: (game) => dispatch(startAddGame(game))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddGamePage);
