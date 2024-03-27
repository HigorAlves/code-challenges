import React, {FC, useState, useEffect, useCallback} from "react";

import { RouteComponentProps } from "@reach/router";
import { IUserProps } from "../dtos/user.dto";
import { UserCard } from "../components/users/user-card";
import { CircularProgress } from "@mui/material";

import { BackendClient } from "../clients/backend.client";

const backendClient = new BackendClient();

export const DashboardPage: FC<RouteComponentProps> = () => {
  const [users, setUsers] = useState<IUserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<IUserProps[] | []>([])

  const fetchData = async (pageId: number) => {
    const result = await backendClient.getAllUsers(pageId);


    setUsers(result.data);
    setLoading(false)
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  function RenderUsers() {
    return (
      <div>
        {users.length
          ? users.map((user) => {
            return <UserCard key={user.id} {...user} />;
          })
          : null}
      </div>
    )
  }

  function RenderProgress() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size="60px" />
      </div>
    )
  }

  return (
    <div style={{ paddingTop: "30px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {loading ? <RenderProgress/> : <RenderUsers/>}
      </div>

      <button onClick={() => setCurrentPage(currentPage + 1)}>Fetch Data</button>
    </div>
  );
};
