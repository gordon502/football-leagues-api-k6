import {ResourceEndpoints} from "./utils/resource-endpoints";
import {InputKey} from "./utils/models";
import http from "k6/http";
import {check} from "k6";
import {inputData} from "./utils/input-data";
import {resourceStatistics} from "./utils/resource-statistics";

const resourceToRelatedFunction: Record<InputKey, (page: number, limit: number) => void> = {
  articles: readArticles,
  games: readGames,
  gameEvents: readGameEvents,
  leaderboards: readLeaderboards,
  leagues: readLeagues,
  organizationalUnits: readOrganizationalUnits,
  rounds: readRounds,
  seasons: readSeasons,
  seasonTeams: readSeasonTeams,
  teams: readTeams,
  users: readUsers,
};

function readUsers(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.users}?page=${page}&limit=${limit}`,
  );

  check(res, {'users status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.users.counter.add(1);
  resourceStatistics.users.trend.add(res.timings.duration);
}

function readOrganizationalUnits(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.organizationalUnits}?page=${page}&limit=${limit}`
  );

  check(res, {'organizational-units status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.organizationalUnits.counter.add(1);
  resourceStatistics.organizationalUnits.trend.add(res.timings.duration);
}

function readTeams(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.teams}?page=${page}&limit=${limit}`,
  );

  check(res, {'teams status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.teams.counter.add(1);
  resourceStatistics.teams.trend.add(res.timings.duration);
}

function readLeagues(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.leagues}?page=${page}&limit=${limit}`,
  );

  check(res, {'leagues status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.leagues.counter.add(1);
  resourceStatistics.leagues.trend.add(res.timings.duration);
}

function readSeasons(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.seasons}?page=${page}&limit=${limit}`,
  );

  check(res, {'seasons status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.seasons.counter.add(1);
  resourceStatistics.seasons.trend.add(res.timings.duration);
}

function readSeasonTeams(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.seasonTeams}?page=${page}&limit=${limit}`,
  );

  check(res, {'season-teams status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.seasonTeams.counter.add(1);
  resourceStatistics.seasonTeams.trend.add(res.timings.duration);
}

function readArticles(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.articles}?page=${page}&limit=${limit}`,
  );

  check(res, {'articles status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.articles.counter.add(1);
  resourceStatistics.articles.trend.add(res.timings.duration);
}

function readRounds(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.rounds}?page=${page}&limit=${limit}`,
  );

  check(res, {'rounds status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.rounds.counter.add(1);
  resourceStatistics.rounds.trend.add(res.timings.duration);
}

function readGames(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.games}?page=${page}&limit=${limit}`,
  );

  check(res, {'games status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.games.counter.add(1);
  resourceStatistics.games.trend.add(res.timings.duration);
}

function readGameEvents(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.gameEvents}?page=${page}&limit=${limit}`,
  );

  check(res, {'game-events status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.gameEvents.counter.add(1);
  resourceStatistics.gameEvents.trend.add(res.timings.duration);
}

function readLeaderboards(page: number, limit: number): void {
  const res = http.get(
    `${ResourceEndpoints.leaderboards}?page=${page}&limit=${limit}`,
  );

  check(res, {'leaderboards status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.leaderboards.counter.add(1);
  resourceStatistics.leaderboards.trend.add(res.timings.duration);
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeRandomRequest(): void {
  const pageLimit = 50;

  const randomResourceKey = Object.keys(inputData)[Math.floor(Math.random() * Object.keys(inputData).length)] as InputKey;

  const maxPages = inputData[randomResourceKey].length / pageLimit;
  const randomPage = getRandomInt(1, maxPages);

  resourceToRelatedFunction[randomResourceKey](randomPage, pageLimit);
}

export default function main(): void {
  makeRandomRequest();
}
