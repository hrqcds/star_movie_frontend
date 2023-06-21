import { Space, Image, Descriptions } from "antd";
import api from "../../config/axios";
import { useEffect, useState } from "react";
import { Movie } from "../../dtos/MovieResponse";
import toast from "react-hot-toast";

interface ModalMovieProps {
  id: string;
}

export function ModalShowMovie({ id }: ModalMovieProps) {
  const [movie, setMovie] = useState<Movie>();

  async function getMovie() {
    try {
      const response = await api.get<Movie>(`api/movies/${id}`);
      return response.data;
    } catch (error) {
      toast.error("Erro ao buscar filme!");
      setMovie(undefined);
    }
  }

  useEffect(() => {
    getMovie().then((response) => {
      if (response === undefined) return;
      setMovie(response);
    });
  }, []);

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        {movie && (
          <>
            <Image height={400} width={300} src={movie.img_url} />
            <Descriptions>
              <Descriptions.Item label="Nota">{movie.note}/5</Descriptions.Item>
            </Descriptions>
            <Descriptions
              style={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Descriptions.Item label="Descrição">
                {movie.description}
              </Descriptions.Item>
            </Descriptions>
          </>
        )}
      </Space>
    </>
  );
}
