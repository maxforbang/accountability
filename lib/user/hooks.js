import { fetcher } from '@/lib/fetch';
import useSWR from 'swr';

export function useCurrentUser() {
  return useSWR('/api/user', fetcher);
}

export function usePeers(currentUserId) {
  return useSWR(`/api/user/peers?id=${currentUserId}`, fetcher);
}

export function useWeeklyAccountability(userId) {
  return useSWR(`/api/user/accountability/weekly/${userId}`, fetcher);
}