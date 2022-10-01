import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Input, Form } from 'antd';
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const Humandropdown = () => {
    const [form] = Form.useForm();

    const [adult, setadult] = useState(0);
    const [child, setchild] = useState(0);
    const [passcount, setpasscount] = useState('Adult (0), Child(0)');

    const menu = () => {
        return (
          <Menu>
            <Menu.Item>
              Adult
              <span style={{ float: "right" }}>
                <PlusCircleOutlined
                  onClick={addAdult}
                  style={{ margin: "8px" }}
                />
                {adult}
                <MinusCircleOutlined
                  onClick={removeAdult}
                  style={{ margin: "8px" }}
                />
              </span>
            </Menu.Item>
            <Menu.Item>
              Child
              <span style={{ float: "right" }}>
                <PlusCircleOutlined
                  onClick={addChild}
                  style={{ margin: "8px" }}
                />
                {child}
                <MinusCircleOutlined
                  onClick={removeChild}
                  style={{ margin: "8px" }}
                />
              </span>
            </Menu.Item>
          </Menu>
        );
    };

    useEffect(() => {
        setpasscount(`Adult (${adult}), Child(${child})`);
        form.setFieldsValue({
            people: `Adult (${adult}), Child(${child})`,
        });
    }, [adult, child]);

    const addAdult = () => {
        setadult((prevAdult) => prevAdult + 1);
    };

    const removeAdult = () => {
        if (adult > 0) setadult((prevAdult) => prevAdult - 1);
    };

    const addChild = () => {
        setchild((prevchild) => prevchild + 1);
    };

    const removeChild = () => {
        if (child > 0) setchild((prevchild) => prevchild - 1);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
      <MDBRow tag="form" className="row-cols-lg-auto g-3 align-items-center">
        <MDBCol size="12">
          <Form
            form={form}
            name="passenger"
            labelCol={{ span: 16 }}
            wrapperCol={{ span: 8 }}
            onFinish={onFinish}
            initialValues={{
              people: passcount,
            }}
          >
            <Form.Item name="people" style={{ marginBottom: "0" }}>
              <Dropdown overlay={menu}>
                <Input value={passcount} style={{ width: 150 }} disabled />
              </Dropdown>
            </Form.Item>
          </Form>
        </MDBCol>
      </MDBRow>
    );
};

export default Humandropdown;