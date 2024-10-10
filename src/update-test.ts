import {faker} from '@faker-js/faker';
import {ResourceEndpoints} from "./utils/resource-endpoints";
import {InputKey, WithId} from "./utils/models";
import http from "k6/http";
import {check} from "k6";
import {requestConfig} from "./utils/config";
import {resourceStatistics} from "./utils/resource-statistics";
import {inputData} from "./utils/input-data";

const resourceToRelatedFunction = {
  articles: updateArticle,
  games: updateGames,
  gameEvents: updateGameEvent,
  leaderboards: updateLeaderboard,
  leagues: updateLeague,
  organizationalUnits: updateOrganizationalUnit,
  rounds: updateRound,
  seasons: updateSeason,
  seasonTeams: updateSeasonTeam,
  teams: updateTeam,
  users: updateUser,
};

function updateUser(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.users}/${object.id}`,
    JSON.stringify({
      name: faker.internet.userName(),
    }),
    requestConfig
  );

  check(res, {'users status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.users.counter.add(1);
  resourceStatistics.users.trend.add(res.timings.duration);
}

function updateOrganizationalUnit(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.organizationalUnits}/${object.id}`,
    JSON.stringify({
      ...object,
    }),
    requestConfig
  );

  check(res, {'organizational-units status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.organizationalUnits.counter.add(1);
  resourceStatistics.organizationalUnits.trend.add(res.timings.duration);
}

function updateTeam(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.teams}/${object.id}`,
    JSON.stringify(object),
    requestConfig
  );

  check(res, {'teams status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.teams.counter.add(1);
  resourceStatistics.teams.trend.add(res.timings.duration);
}

function updateLeague(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.leagues}/${object.id}`,
    JSON.stringify(object),
    requestConfig
  );

  check(res, {'leagues status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.leagues.counter.add(1);
  resourceStatistics.leagues.trend.add(res.timings.duration);
}

function updateSeason(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.seasons}/${object.id}`,
    JSON.stringify(object),
    requestConfig
  );

  check(res, {'seasons status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.seasons.counter.add(1);
  resourceStatistics.seasons.trend.add(res.timings.duration);
}

function updateSeasonTeam(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.seasonTeams}/${object.id}`,
    JSON.stringify(object),
    requestConfig
  );

  check(res, {'season-teams status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.seasonTeams.counter.add(1);
  resourceStatistics.seasonTeams.trend.add(res.timings.duration);
}

function updateArticle(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.articles}/${object.id}`,
    JSON.stringify(object),
    requestConfig
  );

  check(res, {'articles status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.articles.counter.add(1);
  resourceStatistics.articles.trend.add(res.timings.duration);
}

function updateRound(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.rounds}/${object.id}`,
    JSON.stringify(object),
    requestConfig
  );

  check(res, {'rounds status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.rounds.counter.add(1);
  resourceStatistics.rounds.trend.add(res.timings.duration);
}

function updateGames(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.games}/${object.id}`,
    JSON.stringify(object),
    requestConfig
  );

  check(res, {'games status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.games.counter.add(1);
  resourceStatistics.games.trend.add(res.timings.duration);
}

function updateGameEvent(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.gameEvents}/${object.id}`,
    JSON.stringify(object),
    requestConfig
  );

  check(res, {'game-events status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.gameEvents.counter.add(1);
  resourceStatistics.gameEvents.trend.add(res.timings.duration);
}

function updateLeaderboard(object: WithId): void {
  const res = http.put(
    `${ResourceEndpoints.leaderboards}/${object.id}`,
    JSON.stringify(object),
    requestConfig
  );

  check(res, {'leaderboards status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.leaderboards.counter.add(1);
  resourceStatistics.leaderboards.trend.add(res.timings.duration);
}

function makeRandomRequest(): void {
  const randomResourceKey = Object.keys(inputData)[Math.floor(Math.random() * Object.keys(inputData).length)] as InputKey;

  const randomResourceItem = inputData[randomResourceKey][Math.floor(Math.random() * inputData[randomResourceKey].length)];

  resourceToRelatedFunction[randomResourceKey](randomResourceItem)
}

export default function main(): void {
  makeRandomRequest();
}
