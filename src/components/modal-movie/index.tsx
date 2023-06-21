import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadFile, UploadProps } from "antd/es/upload";
import { useState } from "react";
import api from "../../config/axios";
import { toast } from "react-hot-toast";

interface ModalMovieProps {
  visible: boolean;
  hideModal: () => void;
}

export function ModalCreateMovie({ hideModal, visible }: ModalMovieProps) {
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [img, setImg] = useState<UploadFile<any>>();
  const [description, setDescription] = useState<string>("");

  const props: UploadProps = {
    name: "file",
    disabled: img !== undefined,
    onChange(info) {
      if (info.file.status !== "uploading") {
        const reader = new FileReader();
        reader.readAsDataURL(info.file.originFileObj as any);
        setImg(info.file);
      }
    },
  };

  async function submit() {
    if (
      title === "" ||
      note === "" ||
      img === undefined ||
      description === ""
    ) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const formData = new FormData();

    const id = sessionStorage.getItem("id");

    formData.append("title", title);
    formData.append("note", note);
    formData.append("file", img.originFileObj as any);
    formData.append("description", description);
    formData.append("userId", id as string);

    try {
      await api.post("api/movies", formData, {
        headers: {
          "content-type":
            "multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s",
        },
      });

      toast.success("Filme cadastrado com sucesso!");
      setTitle("");
      setNote("");
      setImg(undefined);
      setDescription("");

      hideModal();
    } catch (error) {
      toast.error("Erro ao cadastrar filme!");
    }
  }

  return (
    <Modal
      title="Cadastrar Filme"
      open={visible}
      onOk={submit}
      onCancel={hideModal}
    >
      <Form>
        <Form.Item label="Título">
          <Input
            type="text"
            onChange={(value) => setTitle(value.target.value)}
            value={title}
          />
        </Form.Item>
        <Form.Item label="Nota">
          <Input
            type="number"
            min={0}
            max={5}
            onChange={(value) => setNote(value.target.value)}
            value={note}
          />
        </Form.Item>
        <Form.Item label="Imagem">
          <Upload {...props}>
            <Button type="primary" htmlType="button">
              Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Descrição">
          <Input.TextArea
            value={description}
            onChange={(state) => setDescription(state.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
