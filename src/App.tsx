import { Button, Form, Input, Typography, Image, Space } from "antd";
import style from "./app.module.css";
import { useLogin } from "./hooks/useLogin";

// adicionar react-router-dom
// adicionar snackbar para alertas
// separar componente de login
// criar componente de cadastro
// criar componente de listagem de filmes
// criar componente de detalhes de filme
// criar componente de listagem de usuários
// criar componente de edição de usuários





function App() {
  const { login, email, password, setEmail, setPassword } = useLogin();

  return (
    <section className={style.login}>
      <Space direction="vertical" align="center">
        <Image src="/logo.png" preview={false} width={400} />
        <Typography.Title
          level={1}
          style={{
            color: "#fff",
          }}
        >
          Star Movie
        </Typography.Title>
      </Space>
      <Form
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{
          width: "500px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          background: "#fff",
          borderRadius: "5px",
        }}
        onFinish={async () => await login()}
      >
        <Typography.Paragraph>Email</Typography.Paragraph>
        <Form.Item>
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(value) => setEmail(value.target.value)}
          />
        </Form.Item>
        <Typography.Paragraph>Password</Typography.Paragraph>
        <Form.Item>
          <Input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(value) => setPassword(value.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Entrar
          </Button>
          <Button type="ghost" htmlType="button">
            Registrar
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}

export default App;
