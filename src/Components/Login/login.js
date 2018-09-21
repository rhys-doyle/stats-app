import React from "react";

import { Form, Icon, Input, Button } from "antd";
import styles from "./login.css";

const FormItem = Form.Item;

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className={styles.form}>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input username." }]
          })(
            <Input
              className={styles.input}
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,0.25)" }} />
              }
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input password." }]
          })(
            <Input
              className={styles.input}
              prefix={
                <Icon type="lock" style={{ color: "rgba(0,0,0,0.25)" }} />
              }
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <Button type="primary" className={styles.button} htmlType="submit">
          login
        </Button>
      </Form>
    );
  }
}

const WrappedLogin = Form.create({})(Login);

export default WrappedLogin;
