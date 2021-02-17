import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: var(--background);
  color: var(--textColor);

  transition: background 2s, color 2s;

  text-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
`;
