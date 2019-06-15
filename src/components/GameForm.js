import React from 'react';
import { SingleDatePicker } from 'react-dates';
import axios from 'axios';

export default class GameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.game ? props.game.title : '',
      platform: props.game ? props.game.platform : '',
      release: props.game ? props.game.release : '',
      genre: props.game ? props.game.genre : '',
      genresArray: [],
      error: ''
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onPlatformChange = (e) => {
    const platform = e.target.value;
    this.setState(() => ({ platform }));
  };

  onReleaseChange = (e) => {
    const release = parseInt(e.target.value);
    this.setState(() => ({ release }));
  };

  onGenreChange = (e) => {
    const genre = e.target.value;
    this.setState(() => ({ genre }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.platform) {
      this.setState(() => ({
        error: 'Please enter a title and platform'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        platform: this.state.platform,
        release: this.state.release,
        genre: this.state.genre
      });
    }
  };

  async componentDidMount() {
    try {
      const genres = await axios.get('/gbapi');
      this.setState(() => ({
        genresArray: genres.data
      }));
    } catch (err) {
      console.error('Error fetching from Giant Bomb API');
    }
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && (
            <p className="form__error">{this.state.error}</p>
          )}
          <input
            type="text"
            placeholder="Title"
            autoFocus
            className="text-input"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            placeholder="Platform"
            className="text-input"
            value={this.state.platform}
            onChange={this.onPlatformChange}
          />
          <input
            type="number"
            placeholder="Release Year"
            className="text-input"
            value={this.state.release}
            onChange={this.onReleaseChange}
          />
          <select
            className="select"
            placeholder="Genre"
            onChange={this.onGenreChange}
            value={this.state.genre}
          >
            <option value="" disabled selected>
              Genre
            </option>
            {this.state.genresArray.map((genre) => (
              <option key={genre.name} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
          <div>
            <button className="button">Save Game!</button>
          </div>
        </form>
      </div>
    );
  }
}
