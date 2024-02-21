'use client'
import Facts from "@/components/Facts";

import useFetch from "@/hook/useFetch";

export default function Home() {

  const { data, isLoading, error, refetch } = useFetch();

  console.log(data);

  return (
    <Facts allFacts={data} />
  );
}
