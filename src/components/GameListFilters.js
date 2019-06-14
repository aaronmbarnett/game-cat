import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByTitleAsc,
  sortByTitleDesc,
  sortByPlatformAsc,
  sortByPlatformDesc,
  sortByReleaseDesc,
  sortByReleaseAsc,
  sortByGenre
} from '../actions/filters';

export class GameListFilters extends Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    if (e.target.value === 'title-asc') {
      this.props.sortByTitleAsc();
    } else if (e.target.value === 'title-desc') {
      this.props.sortByTitleDesc();
    } else if (e.target.value === 'platform-asc') {
      this.props.sortByPlatformAsc();
    } else if (e.target.value === 'platform-desc') {
      this.props.sortByPlatformDesc();
    } else if (e.target.value === 'release-desc') {
      this.props.sortByReleaseDesc();
    } else if (e.target.value === 'release-asc') {
      this.props.sortByReleaseAsc();
    } else if (e.target.value === 'genre') {
      this.props.sortByGenre();
    }
  };
  render() {
    return (
      <section className="page-header">
        <div className="content-container">
          <div className="input-group">
            <div className="input-group__item">
              <input
                type="text"
                className="text-input"
                placeholder="Search game collection"
                value={this.props.filters.text}
                onChange={this.onTextChange}
              />
            </div>
            <div className="input-group__item">
              <select
                className="select"
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
              >
                <option value="title-asc">Title: Ascending</option>
                <option value="title-desc">Title: Descending</option>
                <option value="platform-asc">Platform: Ascending</option>
                <option value="platform-desc">Platform: Descending</option>
                <option value="release-asc">Release Year: Ascending</option>
                <option value="release-desc">Release Year: Descending</option>
                <option value="genre">Genre</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByTitleAsc: () => dispatch(sortByTitleAsc()),
  sortByTitleDesc: () => dispatch(sortByTitleDesc()),
  sortByPlatformAsc: () => dispatch(sortByPlatformAsc()),
  sortByPlatformDesc: () => dispatch(sortByPlatformDesc()),
  sortByReleaseDesc: () => dispatch(sortByReleaseDesc()),
  sortByReleaseAsc: () => dispatch(sortByReleaseAsc()),
  sortByGenre: () => dispatch(sortByGenre())
});

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameListFilters);
