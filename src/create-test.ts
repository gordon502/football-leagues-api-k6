import {faker} from '@faker-js/faker';
import {ResourceEndpoints} from "./utils/resource-endpoints";
import {GameResult, Leaderboard, Round, SeasonTeam, WithId} from "./utils/models";
import dayjs from "dayjs";
import http from "k6/http";
import {check} from "k6";
import {Counter, Trend} from "k6/metrics";

const createdResources = {
  articles: [] as Array<WithId>,
  games: [] as Array<WithId>,
  gameEvents: [] as Array<WithId>,
  leaderboards: [] as Array<Leaderboard>,
  leagues: [] as Array<WithId>,
  organizationalUnits: [] as Array<WithId>,
  rounds: [] as Array<Round>,
  seasons: [] as Array<WithId>,
  seasonTeams: [] as Array<SeasonTeam>,
  teams: [] as Array<WithId>,
  users: [] as Array<WithId>,
};

const resourceToRelatedFunction = {
  articles: createArticle,
  games: createGame,
  gameEvents: createGameEvent,
  leaderboards: createLeaderboard,
  leagues: createLeague,
  organizationalUnits: createOrganizationalUnit,
  rounds: createRound,
  seasons: createSeason,
  seasonTeams: createSeasonTeam,
  teams: createTeam,
  users: createUser,
};

const resourceStatistics: Record<keyof typeof resourceToRelatedFunction, { counter: Counter, trend: Trend }> = {
  articles: { counter: new Counter('article_response_counter'), trend: new Trend('article_response_time') },
  games: { counter: new Counter('game_response_counter'), trend: new Trend('game_response_time') },
  gameEvents: { counter: new Counter('game_event_response_counter'), trend: new Trend('game_event_response_time') },
  leaderboards: { counter: new Counter('leaderboard_response_counter'), trend: new Trend('leaderboard_response_time') },
  leagues: { counter: new Counter('league_response_counter'), trend: new Trend('league_response_time') },
  organizationalUnits: { counter: new Counter('organizational_unit_response_counter'), trend: new Trend('organizational_unit_response_time') },
  rounds: { counter: new Counter('round_response_counter'), trend: new Trend('round_response_time') },
  seasons: { counter: new Counter('season_response_counter'), trend: new Trend('season_response_time') },
  seasonTeams: { counter: new Counter('season_team_response_counter'), trend: new Trend('season_team_response_time') },
  teams: { counter: new Counter('team_response_counter'), trend: new Trend('team_response_time') },
  users: { counter: new Counter('user_response_counter'), trend: new Trend('user_response_time') },
};

let requestConfig = {
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjY5MzIxMDYsImV4cCI6MTcyNjkzNTcwNiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.jsj7vpFKtpfkTzqnzyykUUTz9p_6-RUrP36j8ObDR_pna7iA79U0vXoy_FMWdJLvfb5Xd3K-RzEqvP81CdgCAXIN_ruoaU6SDWG0-RGGe9JkQQ4n5Oc57BwQtydYuyE370pm7pNMluh3XslYUmJXz4Y6UkKP2Go1P_62HQLes1PRvPqLunkcCItmzYbpwXLFlBgIpXHJdzw83-v6kGRsm1xvZ4nRKjNT11kPwHyh7mN7z7pkD_UqW6jl0HC_jCYeABTPeEJscS51XCxgsdFFryaRgMVn3AU2sVxBgoJY1kzL9ZjkxeGGJ6iwDFdvitiq34HjqcuIMifJmc6XXnQu5A',
    'Content-Type': 'application/json',
  },
};

function createUser(): WithId | false {
  const res = http.post(
    ResourceEndpoints.users,
    JSON.stringify({
      email: faker.internet.email(),
      name: faker.internet.userName(),
      password: faker.internet.password(),
    }),
    requestConfig
  );

  const success = check(res, { 'users status was 2xx': (r) => r.status >= 200 && r.status < 300 });

  resourceStatistics.users.counter.add(1);
  resourceStatistics.users.trend.add(res.timings.duration);

  return success ? res.json() as WithId : false;
}

function createOrganizationalUnit(): WithId | false {
  const res = http.post(
    ResourceEndpoints.organizationalUnits,
    JSON.stringify({
      name: faker.company.name(),
      country: faker.location.country(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      postalCode: faker.location.zipCode(),
      phone: faker.phone.number(),
    }),
    requestConfig
  );

  const success = check(res, { 'organizational-units status was 2xx': (r) => r.status >= 200 && r.status < 300 });
  resourceStatistics.organizationalUnits.counter.add(1);
  resourceStatistics.organizationalUnits.trend.add(res.timings.duration);

  return success ? res.json() as WithId : false;
}

function createTeam(): WithId | false {
  const res = http.post(
    ResourceEndpoints.teams,
    JSON.stringify({
      name: faker.company.name(),
      yearEstablished: faker.date.past({years: 50}).getFullYear(),
      colors: faker.color.human(),
      country: faker.location.country(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      postalCode: faker.location.zipCode(),
      site: faker.internet.url(),
      stadium: faker.company.name(),
      organizationalUnitId: createdResources.organizationalUnits[Math.floor(Math.random() * createdResources.organizationalUnits.length)].id
    }),
    requestConfig
  );

  const result = check(res, { 'teams status was 2xx': (r) => r.status >= 200 && r.status < 300 });
  resourceStatistics.teams.counter.add(1);
  resourceStatistics.teams.trend.add(res.timings.duration);

  return result ? res.json() as WithId : false;
}

function createLeague(): WithId | false {
  const res = http.post(
    ResourceEndpoints.leagues,
    JSON.stringify({
      name: faker.company.name(),
      active: Math.random() > 0.5,
      level: Math.floor(Math.random() * 10),
      organizationalUnitId: createdResources.organizationalUnits[Math.floor(Math.random() * createdResources.organizationalUnits.length)].id
    }),
    requestConfig
  );

  const result = check(res, { 'leagues status was 2xx': (r) => r.status >= 200 && r.status < 300 });
  resourceStatistics.leagues.counter.add(1);
  resourceStatistics.leagues.trend.add(res.timings.duration);

  return result ? res.json() as WithId : false;
}

function createSeason(): WithId | false {
  const res = http.post(
    ResourceEndpoints.seasons,
    JSON.stringify({
      name: faker.company.name(),
      period: String(faker.date.past({years: 50}).getFullYear()),
      active: Math.random() > 0.5,
      leagueId: createdResources.leagues[Math.floor(Math.random() * createdResources.leagues.length)].id
    }),
    requestConfig
  );

  const result = check(res, { 'seasons status was 2xx': (r) => r.status >= 200 && r.status < 300 });
  resourceStatistics.seasons.counter.add(1);
  resourceStatistics.seasons.trend.add(res.timings.duration);

  return result ? res.json() as WithId : false;
}

function createSeasonTeam(): WithId | false {
  const res = http.post(
    ResourceEndpoints.seasonTeams,
    JSON.stringify({
      name: faker.company.name(),
      teamId: createdResources.teams[Math.floor(Math.random() * createdResources.teams.length)].id,
      seasonId: createdResources.seasons[Math.floor(Math.random() * createdResources.seasons.length)].id
    }),
    requestConfig
  );

  const result = check(res, { 'season-teams status was 2xx': (r) => r.status >= 200 && r.status < 300 });
  resourceStatistics.seasonTeams.counter.add(1);
  resourceStatistics.seasonTeams.trend.add(res.timings.duration);

  return result ? res.json() as WithId : false;
}

function createArticle(): WithId | false {
  const res = http.post(
    ResourceEndpoints.articles,
    JSON.stringify({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      draft: Math.random() > 0.5,
      postAt: dayjs(faker.date.recent()).format('YYYY-MM-DD HH:mm:ss'),
      seasonTeamsId: [createdResources.seasonTeams[Math.floor(Math.random() * createdResources.seasonTeams.length)].id]
    }),
    requestConfig
  );

  const result = check(res, { 'articles status was 2xx': (r) => r.status >= 200 && r.status < 300 });
  resourceStatistics.articles.counter.add(1);
  resourceStatistics.articles.trend.add(res.timings.duration);

  return result ? res.json() as WithId : false;
}

function createRound(): Round | false {
  const res = http.post(
    ResourceEndpoints.rounds,
    JSON.stringify({
      number: Math.floor(Math.random() * 100),
      standardStartDate: dayjs(faker.date.recent()).format('YYYY-MM-DD'),
      standardEndDate: dayjs(faker.date.recent()).format('YYYY-MM-DD'),
      seasonId: createdResources.seasons[Math.floor(Math.random() * createdResources.seasons.length)].id
    }),
    requestConfig
  );

  const result = check(res, { 'rounds status was 2xx': (r) => r.status >= 200 && r.status < 300 });

  resourceStatistics.rounds.counter.add(1);
  resourceStatistics.rounds.trend.add(res.timings.duration);

  return result ? res.json() as Round : false;
}

function createGame(): WithId | false {
  const team1ScoreHalf = Math.floor(Math.random() * 10);
  const team2ScoreHalf = Math.floor(Math.random() * 10);

  const round = createdResources.rounds[Math.floor(Math.random() * createdResources.rounds.length)];
  const team1RelatedToRound = createdResources.seasonTeams.find(
    (seasonTeam) => seasonTeam.seasonId === round.seasonId
  );
  const team2RelatedToRound = createdResources.seasonTeams.find(
    (seasonTeam) => seasonTeam.seasonId === round.seasonId && seasonTeam.id !== team1RelatedToRound?.id
  );

  const res = http.post(
    ResourceEndpoints.games,
    JSON.stringify({
      date: dayjs(faker.date.recent()).format('YYYY-MM-DD HH:mm:ss'),
      stadium: faker.company.name(),
      team1ScoreHalf: team1ScoreHalf,
      team2ScoreHalf: team2ScoreHalf,
      team1Score: team1ScoreHalf + 1,
      team2Score: team2ScoreHalf + 1,
      result: team1ScoreHalf === team2ScoreHalf
        ? GameResult.draw
        : team1ScoreHalf > team2ScoreHalf
          ? GameResult.team1Win
          : GameResult.team2Win,
      viewers: String(Math.floor(Math.random() * 1000)),
      annotation: faker.lorem.sentence(),
      roundId: round.id,
      seasonTeam1Id: team1RelatedToRound?.id,
      seasonTeam2Id: team2RelatedToRound?.id
    }),
    requestConfig
  );

  const result = check(res, { 'games status was 2xx': (r) => r.status >= 200 && r.status < 300 });

  resourceStatistics.games.counter.add(1);
  resourceStatistics.games.trend.add(res.timings.duration);

  return result ? res.json() as WithId : false;
}

function createGameEvent(): WithId | false{
  const res = http.post(
    ResourceEndpoints.gameEvents,
    JSON.stringify({
      minute: Math.floor(Math.random() * 90),
      partOrHalf: Math.random() > 0.5 ? 'first_half' : 'second_half',
      teamRelated: Math.random() > 0.5 ? 'team_1' : 'team_2',
      order: Math.floor(Math.random() * 10),
      eventType: Math.random() > 0.5 ? 'goal' : 'yellow_card',
      gameId: createdResources.games[Math.floor(Math.random() * createdResources.games.length)].id
    }),
    requestConfig
  );

  const result = check(res, { 'game-events status was 2xx': (r) => r.status >= 200 && r.status < 300 });

  resourceStatistics.gameEvents.counter.add(1);
  resourceStatistics.gameEvents.trend.add(res.timings.duration);

  return result ? res.json() as WithId : false;
}

function createLeaderboard(): Leaderboard | false {
  const seasonTeamWithNoLeaderboard = createdResources.seasonTeams.find(
    (seasonTeam) => !createdResources.leaderboards.some((leaderboard) => leaderboard.seasonTeamId === seasonTeam.id)
  );

  const res = http.post(
    ResourceEndpoints.leaderboards,
    JSON.stringify({
      place: Math.floor(Math.random() * 100),
      matchesPlayed: Math.floor(Math.random() * 100),
      points: Math.floor(Math.random() * 100),
      wins: Math.floor(Math.random() * 100),
      draws: Math.floor(Math.random() * 100),
      losses: Math.floor(Math.random() * 100),
      goalsScored: Math.floor(Math.random() * 100),
      goalsConceded: Math.floor(Math.random() * 100),
      homeGoalsScored: Math.floor(Math.random() * 100),
      homeGoalsConceded: Math.floor(Math.random() * 100),
      awayGoalsScored: Math.floor(Math.random() * 100),
      awayGoalsConceded: Math.floor(Math.random() * 100),
      promotedToHigherDivision: Math.random() > 0.9,
      eligibleForPromotionBargaining: Math.random() > 0.9,
      eligibleForRetentionBargaining: Math.random() > 0.9,
      relegatedToLowerDivision: Math.random() > 0.9,
      directMatchesPlayed: null,
      directMatchesPoints: null,
      directMatchesWins: null,
      directMatchesDraws: null,
      directMatchesLosses: null,
      directMatchesGoalsScored: null,
      directMatchesGoalsConceded: null,
      annotation: faker.lorem.sentence({min: 9, max: 10}),
      seasonId: seasonTeamWithNoLeaderboard?.seasonId,
      seasonTeamId: seasonTeamWithNoLeaderboard?.id,
    }),
    requestConfig
  );

  const result = check(res, { 'leaderboards status was 2xx': (r) => r.status >= 200 && r.status < 300 });

  resourceStatistics.leaderboards.counter.add(1);
  resourceStatistics.leaderboards.trend.add(res.timings.duration);

  return result ? res.json() as Leaderboard : false;
}

function areSampleResourcesCreated(limit: number): boolean {
  return Object.values(createdResources).every((value) => value.length >= limit);
}

function makePopulateRequest(limit: number): void {
  const pairs = [
    ['users', createUser],
    ['organizationalUnits', createOrganizationalUnit],
    ['teams', createTeam],
    ['leagues', createLeague],
    ['seasons', createSeason],
    ['seasonTeams', createSeasonTeam],
    ['articles', createArticle],
    ['rounds', createRound],
    ['games', createGame],
    ['gameEvents', createGameEvent],
    ['leaderboards', createLeaderboard],
  ] as Array<[keyof typeof createdResources, () => any | false]>;

  for (const [key, method] of pairs) {
    if (createdResources[key].length < limit) {
      const result = method();
      if (result) {
        createdResources[key].push(result);
      }

      return;
    }
  }
}

function makeRandomRequest(): void {
  const randomResourceKey = Object.keys(createdResources)[Math.floor(Math.random() * Object.keys(createdResources).length)] as keyof typeof createdResources;

  const result = resourceToRelatedFunction[randomResourceKey]() as any | false;

  if (result) {
    createdResources[randomResourceKey].push(result);
  }
}

export default function main(): void {
  const limit = 3;

  if (!areSampleResourcesCreated(limit)) {
    makePopulateRequest(limit);
  } else {
    makeRandomRequest();
  }
}

export function teardown() {
  const content = JSON.stringify(createdResources, null, 2);

  console.log(content);
}