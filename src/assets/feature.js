import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;

//   text-align: center;
//   padding: 90px 50px 5px;
// `

// export const Title = styled.h1`
//   color: white;
//   max-width: 640px;
//   font-size: 4rem;
//   font-weight: 500;
//   margin: auto;
//   @media (max-width: 600px) {
//     font-size: 35px;
//   }
// `

// export const SubTitle = styled.h2`
//   color: white;
//   font-size: 26px;
//   font-weight: normal;
//   margin: 16px auto;
//   @media (max-width: 600px) {
//     font-size: 18px;
//   }
// `

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`




export const Container = styled.div`
    display: flex;
flex-direction: column;

 text-align: center;
  padding: 90px 50px 5px;
  background-color: black;
  color: white;
  
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const VideoSection = styled.div`
  flex: 2;
  position: relative;
`;

export const Sidebar = styled.div`
  flex: 1;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  color: gray;
`;

export const SimilarMovies = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 15px;
  padding: 10px 0;
`;

export const MovieCard = styled.div`
  cursor: pointer;
  img {
    border-radius: 10px;
  }
  p {
    text-align: center;
    margin-top: 5px;
  }
`;

export const Reactions = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  margin-top: 10px;
  color: gray;
`;




export const SearchMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Creates a responsive grid */
  gap: 20px; /* Adjust spacing between items */
  padding: 20px;
`;
