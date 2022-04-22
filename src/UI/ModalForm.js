import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  Select,
  DatePicker,

} from "antd";

const ModalForm = ({ showModal, setShowModal }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
  const handleSubmit = () => {
    setLoading(true);
      console.log('submitted');
    form.submit();

    setTimeout(() => {
        setLoading(false)
    }, 1000);
  };

  return (
    <>
      <Modal
        title="Create task"
        centered
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={[
            <Button key="back" onClick={() => setShowModal(false)}>
              Cancel
            </Button>,
            <Button key="add" type="primary" loading={loading} onClick={handleSubmit}>
              Add task
            </Button>,
          ]}
      >
     <Form
     form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 24,
      }}
      layout="vertical"
      initialValues={{
        size: "default",
      }}
      size="default"
    >
      <Form.Item
        style={{ marginBottom: "15px" }}
        rules={[{ required: true }]}
        label="Title"
      >
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: "15px" }}
        label="Related to:"
        rules={[{ required: true }]}
      >
        <Input placeholder="Related to" />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: "15px" }}
        rules={[{ required: true }]}
        label="Assigned to:"
      >
        <Input placeholder="Assign"/>
      </Form.Item>
      <Form.Item style={{marginBottom: "15px" }} label="Priority">
            <Select style={{ width: "20%" }} defaultValue="Default">
              <Option value="default">Default</Option>
              <Option value="urgent">Urgent</Option>
              <Option value="low">Low</Option>
              <Option value="normal">Normal</Option>
            </Select>
        </Form.Item>
      <Form.Item
        style={{ marginBottom: "15px" }}
        rules={[{ required: true }]}
        label="Due Date:"
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="Reminder">
      <Select style={{ width: "30%" }} defaultValue="No Reminder">
          <Option value="reminder one">Reminder one</Option>
          <Option value="reminder two">Reminder two</Option>
        </Select>
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
