import { Toaster } from "react-hot-toast";
import { Login } from "./pages/login";
import { Layout } from "./components/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./pages/register";
import { Section } from "./components/main";
import { Movies } from "./pages/movies";

// adicionar react-router-dom
// adicionar snackbar para alertas
// separar componente de login
// criar componente de cadastro
// criar componente de listagem de filmes
// criar componente de detalhes de filme
// criar componente de listagem de usuários
// criar componente de edição de usuários

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    children: [
      {
        path: "/movies",
        element: <Section children={<Movies />} />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 2500,
        }}
      />
      <Layout>
        <RouterProvider
          router={router}
          fallbackElement={<div>Carregando...</div>}
        />
      </Layout>
    </>
  );
}

export default App;
