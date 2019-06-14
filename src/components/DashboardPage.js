import React from 'react';
import { Link } from 'react-router-dom';
import GamesList from './GamesList';
import GamesListFilters from './GameListFilters';
import GamesSummary from './GamesSummary';

const DashboardPage = () => (
  <div>
    <GamesListFilters />
    <GamesSummary />
    <GamesList />
  </div>
);

export default DashboardPage;
