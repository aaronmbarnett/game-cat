import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameForm from './GameForm';
import DeleteGameModal from './DeleteGameModal';
import { startEditGame, startRemoveGame } from '../actions/games';

export class EditGamePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
  }
  onSubmit = (game) => {
    this.props.startEditGame(this.props.game.id, game);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemoveGame({ id: this.props.game.id });
    this.props.history.push('/');
    this.setState(() => ({ modalIsOpen: !this.state.modalIsOpen }));
  };

  handleOpenModal = () => {
    console.log('modal button!');
    this.setState(() => ({ modalIsOpen: !this.state.modalIsOpen }));
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Game</h1>
          </div>
        </div>
        <div className="content-container">
          <GameForm game={this.props.game} onSubmit={this.onSubmit} />
          <button
            className="button button--secondary"
            onClick={this.handleOpenModal}
          >
            Remove Game
          </button>
        </div>

        <DeleteGameModal
          modalIsOpen={this.state.modalIsOpen}
          onRemove={this.onRemove}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditGame: (id, game) => dispatch(startEditGame(id, game)),
  startRemoveGame: (id) => dispatch(startRemoveGame(id))
});

const mapStateToProps = (state, props) => {
  return {
    game: state.games.find((game) => game.id === props.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGamePage);
