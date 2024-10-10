export type WithId = {
  id: string;
} & Record<string, unknown>;

export type InputKey =
  'articles' |
  'games' |
  'gameEvents' |
  'leaderboards' |
  'leagues' |
  'organizationalUnits' |
  'rounds' |
  'seasons' |
  'seasonTeams' |
  'teams' |
  'users';

export type Round = WithId & {
  seasonId: string;
};

export type SeasonTeam = WithId & {
  seasonId: string;
};

export type Leaderboard = WithId & {
  seasonId: string;
  seasonTeamId: string;
}

export enum GameResult {
  team1Win = 'team_1',
  draw = 'draw',
  team2Win = 'team_2',
  notPlayed = 'not_played',
  cancelled = 'cancelled',
  postponed = 'postponed',
  team1Walkover = 'team_1_walkover',
  team2Walkover = 'team_2_walkover',
}
