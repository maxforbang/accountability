import { fetcher } from '@/lib/fetch';
import useSWR from 'swr';
export function useGetAccountabilityGoalsQuery(accountabilityId) {
	return useSWR(`/api/goals?accountabilityId=${accountabilityId}`, fetcher);
}