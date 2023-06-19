import { Button, Form, Input, Image, Space, Typography } from "antd";
import style from "./style.module.css";
import { useRegister } from "../../hooks/useRegister";

// adicionar react-router-dom
// criar componente de cadastro
// criar componente de casdastro de filmes
// criar componente de listagem de filmes
// criar componente de detalhes de filme
// criar componente de listagem de usuários
// criar componente de edição de usuários

export function Register() {
  const {
    register,
    email,
    password,
    setEmail,
    setPassword,
    name,
    setName,
    navigate,
  } = useRegister();

  return (
    <>
      <section className={style.login}>
        <Space
          direction="vertical"
          align="center"
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(180deg, #000 0%, #0000 100%)",
          }}
        >
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
          onFinish={async () => await register()}
        >
          <Typography.Paragraph>Nome</Typography.Paragraph>
          <Form.Item>
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(value) => setName(value.target.value)}
            />
          </Form.Item>{" "}
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
              Cadastrar
            </Button>
            <Button
              type="ghost"
              htmlType="button"
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </section>
    </>
  );
}
