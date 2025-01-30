import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  object-fit: contain;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 400px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 12px;
  height: 45px;
  box-sizing: border-box;
  border-radius: 5px;

`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 45px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 20px;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #f40600;
  }
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const Select = styled.select`
  height: 45px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  font-size: 16px;
  cursor: pointer;
`;

export const Text = styled.p`
  text-align: center;
  color: white;
  font-size: 19.2px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
