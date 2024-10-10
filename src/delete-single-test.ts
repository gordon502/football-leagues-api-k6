import {ResourceEndpoints} from "./utils/resource-endpoints";
import {InputKey, WithId} from "./utils/models";
import http from "k6/http";
import {check, sleep} from "k6";
import {requestConfig} from "./utils/config";
import execution from "k6/execution";
import {resourceStatistics} from "./utils/resource-statistics";

const resourceToRelatedFunction: Record<InputKey, any> = {
  articles: deleteArticle,
  games: deleteGame,
  gameEvents: deleteGameEvent,
  leaderboards: deleteLeaderboard,
  leagues: deleteLeague,
  organizationalUnits: deleteOrganizationalUnit,
  rounds: deleteRound,
  seasons: deleteSeason,
  seasonTeams: deleteSeasonTeam,
  teams: deleteTeam,
  users: deleteUser,
};

function deleteUser({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.users}/${id}`,
    {},
    requestConfig
  );

  check(res, {'users status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.users.counter.add(1);
  resourceStatistics.users.trend.add(res.timings.duration);
}

function deleteOrganizationalUnit({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.organizationalUnits}/${id}`,
    {},
    requestConfig
  );

  check(res, {'organizational-units status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.organizationalUnits.counter.add(1);
  resourceStatistics.organizationalUnits.trend.add(res.timings.duration);
}

function deleteTeam({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.teams}/${id}`,
    {},
    requestConfig
  );

  check(res, {'teams status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.teams.counter.add(1);
  resourceStatistics.teams.trend.add(res.timings.duration);
}

function deleteLeague({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.leagues}/${id}`,
    {},
    requestConfig
  );

  check(res, {'leagues status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.leagues.counter.add(1);
  resourceStatistics.leagues.trend.add(res.timings.duration);
}

function deleteSeason({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.seasons}/${id}`,
    {},
    requestConfig
  );

  check(res, {'seasons status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.seasons.counter.add(1);
  resourceStatistics.seasons.trend.add(res.timings.duration);
}

function deleteSeasonTeam({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.seasonTeams}/${id}`,
    {},
    requestConfig
  );

  check(res, {'season-teams status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.seasonTeams.counter.add(1);
  resourceStatistics.seasonTeams.trend.add(res.timings.duration);
}

function deleteArticle({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.articles}/${id}`,
    {},
    requestConfig
  );

  check(res, {'articles status was 2xx': (r) => r.status >= 200 && r.status < 300});
  resourceStatistics.articles.counter.add(1);
  resourceStatistics.articles.trend.add(res.timings.duration);
}

function deleteRound({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.rounds}/${id}`,
    {},
    requestConfig
  );

  check(res, {'rounds status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.rounds.counter.add(1);
  resourceStatistics.rounds.trend.add(res.timings.duration);
}

function deleteGame({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.games}/${id}`,
    {},
    requestConfig
  );

  check(res, {'games status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.games.counter.add(1);
  resourceStatistics.games.trend.add(res.timings.duration);
}

function deleteGameEvent({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.gameEvents}/${id}`,
    {},
    requestConfig
  );

  check(res, {'game-events status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.gameEvents.counter.add(1);
  resourceStatistics.gameEvents.trend.add(res.timings.duration);
}

function deleteLeaderboard({id}: WithId): void {
  const res = http.del(
    `${ResourceEndpoints.leaderboards}/${id}`,
    {},
    requestConfig
  );

  check(res, {'leaderboards status was 2xx': (r) => r.status >= 200 && r.status < 300});

  resourceStatistics.leaderboards.counter.add(1);
  resourceStatistics.leaderboards.trend.add(res.timings.duration);
}

type ResourceToDelete = {
  type: InputKey | null;
  id: string | null;
}

function fetchResourceToDeleteFromMiddlewareServer(): ResourceToDelete {
  const res = http.get('http://host.docker.internal:6969');

  const status = check(res, {'middleware status was 2xx': (r) => r.status >= 200 && r.status < 300});

  if (!status) {
    throw new Error('Middleware server is not available');
  }

  return res.json() as ResourceToDelete;
}

function makeRequest(type: InputKey, id: string): void {
  resourceToRelatedFunction[type]({id});
}

export default function main(): void {
  const resource = fetchResourceToDeleteFromMiddlewareServer();
  if (resource.type === null || resource.id === null) {
    execution.test.abort('Resource type or id is null, nothing to delete');
  } else {
    makeRequest(resource.type, resource.id);
  }
  sleep(1);
}
