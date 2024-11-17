import {ResourceEndpoints} from "./utils/resource-endpoints";
import {WithId} from "./utils/models";
import http from "k6/http";
import {check} from "k6";
import {requestConfig} from "./utils/config";
import execution from "k6/execution";
import {resourceStatistics} from "./utils/resource-statistics";

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

type OrganizationalUnitToDelete = {
  id: string | null;
}

function fetchOrganizationalUnitToDeleteFromMiddlewareServer(): OrganizationalUnitToDelete {
  const res = http.get('http://host.docker.internal:6969');

  const status = check(res, {'middleware status was 2xx': (r) => r.status >= 200 && r.status < 300});

  if (!status) {
    throw new Error('Middleware server is not available');
  }

  return res.json() as OrganizationalUnitToDelete;
}

export default function main(): void {
  const resource = fetchOrganizationalUnitToDeleteFromMiddlewareServer();
  if (resource.id === null) {
    execution.test.abort('Resource type or id is null, nothing to delete');
  } else {
    deleteOrganizationalUnit({id: resource.id});
  }
}
