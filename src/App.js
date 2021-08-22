import { useState } from "react";
import { Input, Row, Col, Button, Card, Form } from "antd";

import Item from "./Item";

function App() {
  const [userList, setUserList] = useState([]);

  const [addUserForm] = Form.useForm();

  function handleAddUser(values) {
    setUserList([values, ...userList]);
    addUserForm.resetFields();
  }
  const onReset = () => {
    addUserForm.resetFields();
  };

  function handleDeleteUser(index) {
    const newuserList = userList;
    newuserList.splice(index, 1);
    setUserList([...newuserList]);
  }

  function handleEditUser(values, index) {
    const newuserList = userList;
    newuserList.splice(index, 1, values);
    setUserList([...newuserList]);
  }

  function renderuserList() {
    return userList.map((userItem, userIndex) => {
      return (
        <Item
          key={`${userIndex}-${userItem.name}`}
          index={userIndex}
          name={userItem.name}
          age={userItem.age}
          salary={userItem.salary}
          handleEditUser={handleEditUser}
          handleDeleteUser={handleDeleteUser}
        />
      );
    });
  }

  return (
    <div style={{ width: 800, margin: "24px auto" }}>
      <h2>Creat User</h2>
      <Card title="Add user" size="small">
        <Form
          form={addUserForm}
          name="create-user"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ name: "", age: "", salary: "" }}
          onFinish={(values) => handleAddUser(values)}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please input your age!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Salary"
            name="salary"
            rules={[{ required: true, message: "Please input your salary!" }]}
          >
            <Input />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Button type="primary" htmlType="submit" block>
                Add
              </Button>
            </Col>

            <Col span={12}>
              <Button htmlType="button" onClick={onReset} block>
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
      {renderuserList()}
    </div>
  );
}

export default App;
