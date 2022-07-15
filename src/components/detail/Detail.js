import styled from "styled-components";
import { Loading } from "../Loading";
import { Container } from "../Container";
import { MovieDetall } from "./MovieDetall";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieApi } from "../api";
import { ScrollTop } from "../../ScrollTop";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;
// const Iframe = styled.iframe`
//   width: 100%;
//   height: 800px;
//   margin-top: 150px;
//   @media screen and (max-width: 500px) {
//     height: 300px;
//   }
// `;

export const Detail = () => {
  const [movieData, setmovieData] = useState();
  const [loading, setLoading] = useState(true);
  // const [similar, setsimilar] = useState();
  // const [movieViedo, setmovieViedo] = useState();
  const { id } = useParams();

  useEffect(() => {
    const movieData = async () => {
      try {
        const { data: detailData } = await movieApi.moviedetail(id);
        setmovieData(detailData);
        // const { data: similarData } = await movieApi.detailsimilar(id);
        // setsimilar(similarData);
        // const {
        //   data: { results },
        // } = await movieApi.video(id);
        // setmovieViedo(results.length === 0 ? null : results[0].key);
        setLoading(false);
      } catch (error) {}
    };
    movieData();
  }, []);

  return (
    <Wrap>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {movieData && <MovieDetall movieData={movieData} />}
          {/* {movieViedo ? (
            <Iframe
              src={`https://www.youtube.com/embed/${movieViedo}`}
              allowFullScreen
            ></Iframe>
          ) : null} */}
          {/* {similar && < MovieDetall } */}
        </Container>
      )}
    </Wrap>
  );
};
