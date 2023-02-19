import { fetcher } from '@/lib/fetch';
import useSWR from 'swr';

export function useGoal() {
	return useSWR(`/api/goal`, fetcher);
}