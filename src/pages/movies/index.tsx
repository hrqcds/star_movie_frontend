import { useState } from "react";
import { CardItem } from "../../components/card-item";
import { useMovies } from "../../hooks/useMovies";
import { Pagination } from "antd";

export function Movies() {
  const { movies } = useMovies();

  const [pages, setPages] = useState(0);

  return (
    <>
      <div className="">
        <div className=""></div>
        <div className="">
          {movies.data.length > 0 &&
            movies.data.map((movie) => {
              return (
                <CardItem
                  key={movie.id}
                  title={movie.title}
                  note={movie.note}
                  image={movie.img_url}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
