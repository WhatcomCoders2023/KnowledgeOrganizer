import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface MediaData {
  title: string;
  author: string;
  link: string;
  summary: string;
}

function createMediaData(
  title: string,
  author: string,
  link: string,
  summary: string
): MediaData {
  return {
    title,
    author,
    link,
    summary,
  };
}

const rows = [createMediaData('name', 'genre', 'link', 'summary')];

export default function MediaTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title&nbsp;</TableCell>
            <TableCell align="right">Author&nbsp;</TableCell>
            <TableCell align="right">Link&nbsp;</TableCell>
            <TableCell align="right">Summary&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.link}</TableCell>
              <TableCell align="right">{row.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
