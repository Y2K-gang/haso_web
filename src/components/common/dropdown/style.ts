import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.div`
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem;
  background-color: white;
  color: #374151;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #e5e7eb;
  }
`;
