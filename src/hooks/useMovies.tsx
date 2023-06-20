import { AxiosError } from "axios";
import api from "../config/axios";
import { MovieListResponse } from "../dtos/MovieListResponse";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

interface MovieProps {
  take: number;
  skip: number;
  title?: string;
  note?: number;
}

export function useMovies() {
  const [movies, setMovies] = useState<{
    data: MovieListResponse[];
    total: number;
  }>({
    data: [],
    total: 0,
  });
  const [query, setQuery] = useState<MovieProps>({
    take: 10,
    skip: 0,
    title: "",
  });
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  function showModalCreate() {
    setVisibleCreateModal((state) => !state);
  }

  async function getMovies() {
    try {
      setLoading(true);
      const response = (
        await api.get(
          `api/movies?take=${query.take}&skip=${query.skip}&title=${query.title}`
        )
      ).data;

      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error("Erro ao carregar filmes!");
        return;
      }

      toast.error("Erro ao carregar filmes!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies().then((response) => {
      if (response === undefined) return;

      setMovies({
        data: response.Data,
        total: response.Total,
      });
    });
  }, [query]);

  return {
    query,
    setQuery,
    movies,
    setMovies,
    visibleCreateModal,
    showModalCreate,
    selectedId,
    setSelectedId,
    loading,
  };
}
