import { useSearchParams } from 'next/navigation';

const useQuery = (): URLSearchParams => {
  const searchParams = useSearchParams();
  return new URLSearchParams(searchParams.toString());
}

export default useQuery;
