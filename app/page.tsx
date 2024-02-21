'use client'
import Facts from "@/components/Facts";
import RefetchButton from "@/components/RefetchButton";

import useFetch from "@/hook/useFetch";

export default function Home() {

  const { data, isLoading, error, refetch } = useFetch();

  console.log(data);

  return (
    <>
      <Facts allFacts={data} />
      <RefetchButton refetch={refetch} />
    </>
  );
}
