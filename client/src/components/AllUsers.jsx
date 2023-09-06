import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from "@mui/material";
import { getUsers } from "../service/api";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StyledTable = styled(Table) `
  width: 90%;
  margin: 50px auto 0 auto;
`;

const StyledHeadTableRow = styled(TableRow) `
  background: #000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const StyledBodyTableRow = styled(TableRow) `
  & > td {
    font-size: 20px;
  }
`

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  }

  return (
    <StyledTable>
      <TableHead>
        <StyledHeadTableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </StyledHeadTableRow>
      </TableHead>
      <TableBody>
        {
          users.map((user) => {
            return (
              <StyledBodyTableRow>
                  <TableCell>{user.userId}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.userId}`}>Edit</Button>
                    <Button variant="contained" color="secondary">Delete</Button>
                  </TableCell>
              </StyledBodyTableRow>
            )
          })
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers;