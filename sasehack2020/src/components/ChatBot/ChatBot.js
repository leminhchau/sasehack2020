import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      status: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, status } = steps;

    this.setState({ name, status });
  }

  render() {
    const { name, status } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{status.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Hello! What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}! How can I help you today?",
            trigger: "help",
          },
          {
            id: "help",
            options: [
              { value: "dailycheckup", label: "Daily Checkup", trigger: "5" },
              { value: "emergency", label: "Emergency", trigger: "6" },
            ],
          },
          {
            id: "5",
            message: "How do you feel today?",
            trigger: "8",
          },
          {
            id: "8",
            options: [
              { value: "better", label: "Better", trigger: "end-message" },
              { value: "worse", label: "Worse", trigger: "10" },
            ],
          },
          {
            id: "6",
            message: "Please call 911. Would you like me to call for you?",
            trigger: "911",
          },
          {
            id: "911",
            options: [
              { value: "yes", label: "Yes, please", trigger: "end-message2" },
              {
                value: "no",
                label: "No, I will call myself",
                trigger: "end-message3",
              },
            ],
          },
          {
            id: "10",
            message:
              "Please check out today self-cure plan under the Information",
            end: true,
          },
          {
            id: "end-message",
            message: "Good! Keep me updated on how you feel! Have a good one!",
            end: true,
          },
          {
            id: "end-message2",
            message: "Ending conversation and calling 911 now",
            end: true,
          },
          {
            id: "end-message3",
            message: "Alright. I hope everything is going okay!",
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;
