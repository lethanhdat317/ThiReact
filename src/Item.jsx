import { useState } from 'react';
import { Row, Col, Space, Input, Button, Card, Form } from 'antd';

function Item(props) {
  const {
    index,
    name,
    age,
    salary,
    handleEditUser,
    handleDeleteUser,
  } = props;
  const [isEdit, setIsEdit] = useState(false);

  function renderUser() {
    if (isEdit) {
      return (
        <Form
          name="edit-user"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 28 }}
          initialValues={{ name: name, age: age, salary: salary }}
          onFinish={(values) => {
            handleEditUser(values, index);
            setIsEdit(false)
          }}
        >
          
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please input your age!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Salary"
            name="salary"
            rules={[{ required: true, message: 'Please input your salary!' }]}
          >
            <Input />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Button type="primary" htmlType="submit" block>
                OK
              </Button>
            </Col>
            <Col span={12}>
              <Button htmlType="button" block onClick={() => setIsEdit(false)}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      )
    } else {
      return (
        <>
          <div>ID: {index}</div>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Salary: {salary.toLocaleString()}</div>
        </>
      )
    }
  }

  return (
    <Card
      size="small"
      extra={(
        <Space>
          {!isEdit && (
            <Button type="link" onClick={() => setIsEdit(true)}>
              Edit
            </Button>
          )}
            <Button type="link" danger onClick={() => handleDeleteUser(index)}>
              Delete
            </Button>

        </Space>
      )}
      style={{ marginTop: 24 }}
    >
      {renderUser()}
    </Card>
  );
}

export default Item;
