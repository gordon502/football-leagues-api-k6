import {ResourceEndpoints} from "./utils/resource-endpoints";
import {InputKey, WithId} from "./utils/models";
import http from "k6/http";
import {check} from "k6";
import {inputData} from "./utils/input-data";
import {requestConfig} from "./utils/config";
import {resourceStatistics} from "./utils/resource-statistics";

const resourceToRelatedFunction: Record<InputKey, any> = {
  articles: readArticle,
  games: readGame,
  gameEvents: readGameEvent,
  leaderboards: readLeaderboard,
  leagues: readLeague,
  organizationalUnits: readOrganizationalUnit,
  rounds: readRound,
  seasons: readSeason,
  seasonTeams: readSeasonTeam,
  teams: readTeam,
  users: readUser,
};

function readUser({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.users}/${id}`,
    requestConfig
  );

  check(res, {'users status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.users.counter.add(1);
  resourceStatistics.users.trend.add(res.timings.duration);
}

function readOrganizationalUnit({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.organizationalUnits}/${id}`,
    requestConfig
  );

  check(res, {'organizational-units status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.organizationalUnits.counter.add(1);
  resourceStatistics.organizationalUnits.trend.add(res.timings.duration);
}

function readTeam({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.teams}/${id}`,
    requestConfig
  );

  check(res, {'teams status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.teams.counter.add(1);
  resourceStatistics.teams.trend.add(res.timings.duration);
}

function readLeague({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.leagues}/${id}`,
    requestConfig
  );

  check(res, {'leagues status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.leagues.counter.add(1);
  resourceStatistics.leagues.trend.add(res.timings.duration);
}

function readSeason({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.seasons}/${id}`,
    requestConfig
  );

  check(res, {'seasons status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.seasons.counter.add(1);
  resourceStatistics.seasons.trend.add(res.timings.duration);
}

function readSeasonTeam({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.seasonTeams}/${id}`,
    requestConfig
  );

  check(res, {'season-teams status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.seasonTeams.counter.add(1);
  resourceStatistics.seasonTeams.trend.add(res.timings.duration);
}

function readArticle({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.articles}/${id}`,
    requestConfig
  );

  check(res, {'articles status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.articles.counter.add(1);
  resourceStatistics.articles.trend.add(res.timings.duration);
}

function readRound({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.rounds}/${id}`,
    requestConfig
  );

  check(res, {'rounds status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.rounds.counter.add(1);
  resourceStatistics.rounds.trend.add(res.timings.duration);
}

function readGame({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.games}/${id}`,
    requestConfig
  );

  check(res, {'games status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.games.counter.add(1);
  resourceStatistics.games.trend.add(res.timings.duration);
}

function readGameEvent({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.gameEvents}/${id}`,
    requestConfig
  );

  check(res, {'game-events status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.gameEvents.counter.add(1);
  resourceStatistics.gameEvents.trend.add(res.timings.duration);
}

function readLeaderboard({id}: WithId): void {
  const res = http.get(
    `${ResourceEndpoints.leaderboards}/${id}`,
    requestConfig
  );

  check(res, {'leaderboards status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.leaderboards.counter.add(1);
  resourceStatistics.leaderboards.trend.add(res.timings.duration);
}

function makeRandomRequest(): void {
  const randomResourceKey = Object.keys(inputData)[Math.floor(Math.random() * Object.keys(inputData).length)] as InputKey;

  const randomResourceRandomItem = inputData[randomResourceKey][Math.floor(Math.random() * inputData[randomResourceKey].length)];

  resourceToRelatedFunction[randomResourceKey](randomResourceRandomItem);
}

export default function main(): void {
  makeRandomRequest();
}
