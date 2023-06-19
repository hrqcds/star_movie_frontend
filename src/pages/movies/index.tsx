import { useState } from "react";
import { CardItem } from "../../components/card-item";
import { useMovies } from "../../hooks/useMovies";
import { Col, Row } from "antd";

export function Movies() {
  const { movies } = useMovies();

  const [pages, setPages] = useState(0);

  return (
    <>
      <div className="">
        <Row className="">
          <Col>Teste</Col>
        </Row>
        <Row justify="center" align="middle" style={{gap: "1rem"}}> 
          {movies.data.length > 0 &&
            movies.data.map((movie) => {
              return (
                <Col>
                  <CardItem
                    key={movie.id}
                    title={movie.title}
                    note={movie.note}
                    image={movie.img_url}
                  />
                </Col>
              );
            })}
        </Row>
      </div>
    </>
  );
}
