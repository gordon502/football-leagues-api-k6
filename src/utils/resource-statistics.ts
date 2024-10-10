import {Counter, Trend} from "k6/metrics";
import {InputKey} from "./models";

export const resourceStatistics: Record<InputKey, { counter: Counter, trend: Trend }> = {
  articles: {counter: new Counter('article_response_counter'), trend: new Trend('article_response_time')},
  games: {counter: new Counter('game_response_counter'), trend: new Trend('game_response_time')},
  gameEvents: {counter: new Counter('game_event_response_counter'), trend: new Trend('game_event_response_time')},
  leaderboards: {counter: new Counter('leaderboard_response_counter'), trend: new Trend('leaderboard_response_time')},
  leagues: {counter: new Counter('league_response_counter'), trend: new Trend('league_response_time')},
  organizationalUnits: {
    counter: new Counter('organizational_unit_response_counter'),
    trend: new Trend('organizational_unit_response_time')
  },
  rounds: {counter: new Counter('round_response_counter'), trend: new Trend('round_response_time')},
  seasons: {counter: new Counter('season_response_counter'), trend: new Trend('season_response_time')},
  seasonTeams: {counter: new Counter('season_team_response_counter'), trend: new Trend('season_team_response_time')},
  teams: {counter: new Counter('team_response_counter'), trend: new Trend('team_response_time')},
  users: {counter: new Counter('user_response_counter'), trend: new Trend('user_response_time')},
};