import { useState } from 'react';
import { Row, Col, Space, Input, Button, Card, Form, Table } from 'antd';
import './App.css';
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
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
            <tr>
              <td>{index}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{salary.toLocaleString()}</td>
            </tr>
          </table>
            
            {!isEdit && (
            <Button type="primary" onClick={() => setIsEdit(true)}
              style={{width: 100,
                margin: "20px 10px 0px 300px"
              }}>Edit</Button>
          )}
            <Button danger type="primary" danger onClick={() => handleDeleteUser(index)}
            style={{width: 100,
              margin: "20px 100px 0px 0px"
            }}>
              Delete
            </Button>

        </>
      )
    }
  }

  return (
    <Card
      size="small"
      
      style={{ marginTop: 24 }}
    >
      {renderUser()}
    </Card>
  );
}

export default Item;
