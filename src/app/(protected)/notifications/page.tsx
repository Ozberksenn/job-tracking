"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const Notifications = () => {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(
        "https://crudcrud.com/api/2d6cb12c5a0440c4a34c2743654140ac/users"
      ).then((res) => res.json()),
  });

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <p>{data[0].id}</p>
      <p>{data[0].mail}</p>
      <p>{data[0].password}</p>
    </div>
  );
};

export default Notifications;
