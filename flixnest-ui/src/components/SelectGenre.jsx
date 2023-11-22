import React from 'react';
import styled from 'styled-components';
import { fetchDataByGenre } from '../store';
import { useDispatch } from 'react-redux';

export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const selectedGenre = e.target.value;
    dispatch(fetchDataByGenre({ genres, genre: selectedGenre, type }));
  };

  return (
    <Select className="flex" onChange={handleChange}>
      {genres.map((genre) => (
        <option value={genre.id} key={genre.id}>
          {genre.name}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;
