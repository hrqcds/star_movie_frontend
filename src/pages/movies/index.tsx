import { CardItem } from "../../components/card-item";
import { useMovies } from "../../hooks/useMovies";
import { Col, Row, Pagination, Button, Input, Modal } from "antd";
import { ModalCreateMovie } from "../../components/modal-movie";
import { ModalShowMovie } from "../../components/modal-show-movie";

export function Movies() {
  const {
    movies,
    query,
    setQuery,
    visibleCreateModal,
    showModalCreate,
    loading,
  } = useMovies();

  return (
    <>
      {visibleCreateModal && (
        <ModalCreateMovie
          visible={visibleCreateModal}
          hideModal={showModalCreate}
        />
      )}
      <div className="">
        <Row
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
          justify={"space-around"}
          align="middle"
        >
          <Col>
            <Button onClick={showModalCreate}>Adicionar</Button>
          </Col>
          <Col>
            <Input.Search
              onChange={(e) => {
                setQuery({
                  ...query,
                  title: e.target.value,
                });
              }}
              loading={loading}
              placeholder="Pesquisar"
            />
          </Col>
          <Col>
            <Pagination
              defaultCurrent={query.skip + 1}
              defaultPageSize={query.take}
              onChange={(page) => {
                setQuery({
                  ...query,
                  skip: page - 1,
                });
              }}
              current={query.skip + 1}
              total={movies.total}
            />
          </Col>
        </Row>
        <Row justify="center" align="middle" wrap={true} gutter={[15, 20]}>
          {movies.data.length > 0 &&
            movies.data.map((movie) => {
              return (
                <Col key={movie.id}>
                  <CardItem
                    id={movie.id}
                    title={movie.title}
                    note={movie.note}
                    image={movie.img_url}
                    func={() => {
                      Modal.info({
                        title: movie.title,
                        content: <ModalShowMovie id={movie.id} />,
                      });
                    }}
                  />
                </Col>
              );
            })}
        </Row>
      </div>
    </>
  );
}
