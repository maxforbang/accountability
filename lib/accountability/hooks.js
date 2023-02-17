import { fetcher } from '@/lib/fetch';
import useSWR from 'swr';

export function useGetWeeklyAccountabilityQuery(id) {
	return useSWR(`/api/accountability?id=${id}`, fetcher);
}