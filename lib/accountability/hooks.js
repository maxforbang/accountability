import { fetcher } from '@/lib/fetch';
import useSWR from 'swr';

export function useGetWeeklyAccountabilityQuery(userId) {
	return useSWR(`/api/accountability?id=${userId}`, fetcher);
}