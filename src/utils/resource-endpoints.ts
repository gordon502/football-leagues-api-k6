const site = 'http://host.docker.internal:8080';

export const ResourceEndpoints = {
  articles: `${site}/api/articles`,
  games: `${site}/api/games`,
  gameEvents: `${site}/api/game-events`,
  leaderboards: `${site}/api/leaderboards`,
  leagues: `${site}/api/leagues`,
  organizationalUnits: `${site}/api/organizational-units`,
  rounds: `${site}/api/rounds`,
  seasons: `${site}/api/seasons`,
  seasonTeams: `${site}/api/season-teams`,
  teams: `${site}/api/teams`,
  users: `${site}/api/users`,

  login: `${site}/api/login`,
}
