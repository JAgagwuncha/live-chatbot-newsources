import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import axios from "axios";

class FinancialPost extends Component {
  state = {
    tester: ["name", "not"],
  };
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      annual_inc: "",
      inc_enough_y_n: "",
      needed_inc: "",
      why_needed_inc: "",
      in_debt_y_n: "",
      debt_affect_mental_health: "",
      seeking_finanical_help: "",
      seeking_help_improved_mental_health_y_n: "",
      seeking_help_improved_mental_health_how: "",
    };
  }
  register(user) {
    for (var i = 0; i < user.length; i++) {
      const placeholder = {
        id: "placeholder",
        message: "placeholder",
        value: "none",
        metadata: undefined,
      };
      if (user[i] === undefined) {
        user.splice(i, 1, placeholder);
      }
      console.log(user);
    }

    axios
      .post("http://127.0.0.1:3000/finanical", {
        name: user[0].value,
        annual_inc: user[1].value,
        inc_enough_y_n: user[2].value,
        needed_inc: user[3].value,
        why_needed_inc: user[4].value,
        in_debt_y_n: user[5].value,
        debt_affect_mental_health: user[6].value,
        seeking_finanical_help: user[7].value,
        seeking_help_improved_mental_health_y_n: user[8].value,
        seeking_help_improved_mental_health_how: user[9].value,
      })
      .then((response) => {
        console.log(response);
      });
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
      name,
      annual_inc,
      inc_enough_y_n,
      needed_inc,
      why_needed_inc,
      in_debt_y_n,
      debt_affect_mental_health,
      seeking_finanical_help,
      seeking_help_improved_mental_health_y_n,
      seeking_help_improved_mental_health_how,
    } = steps;
    const finanical_data = [
      name,
      annual_inc,
      inc_enough_y_n,
      needed_inc,
      why_needed_inc,
      in_debt_y_n,
      debt_affect_mental_health,
      seeking_finanical_help,
      seeking_help_improved_mental_health_y_n,
      seeking_help_improved_mental_health_how,
    ];
    for (var i = 0; i < finanical_data.length; i++) {
      if (i.value === undefined) {
        console.log("its blank");
        this.setState({ value: "someothername" });
      }
    }
    // console.log(finanical_data);
    this.register(finanical_data);

    this.setState({
      name,
      annual_inc,
      inc_enough_y_n,
      needed_inc,
      why_needed_inc,
      in_debt_y_n,
      debt_affect_mental_health,
      seeking_finanical_help,
      seeking_help_improved_mental_health_y_n,
      seeking_help_improved_mental_health_how,
    });
    console.log("its going here");
  }

  render() {
    const { name } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <h3>Thanks for filling it out {name.value}</h3>
      </div>
    );
  }
}

FinancialPost.propTypes = {
  steps: PropTypes.object,
};

FinancialPost.defaultProps = {
  steps: undefined,
};

class Finanical extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "71",
            validator: (value) => {
              if (value.length === 0) {
                return "something must be entered!";
              } else if (value === " ") {
                return "something must be entered!";
              }
              return true;
            },
          },
          {
            id: "71",
            message: "What is your annual income?",
            trigger: "annual_inc",
          },
          {
            id: "annual_inc",
            user: true,
            trigger: "72",
            validator: (value) => {
              if (value.length === 0) {
                return "something must be entered!";
              } else if (value === " ") {
                return "something must be entered!";
              }
              return true;
            },
          },
          {
            id: "72",
            message:
              "Do you feel this is enough to have a good standard of living?",
            trigger: "inc_enough_y_n",
          },
          {
            id: "inc_enough_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "73" },
              { value: "no", label: "No", trigger: "73" },
            ],
          },
          {
            id: "73",
            message:
              "How much do you think you need to earn annually to achieve a good standard of living?",
            trigger: "needed_inc",
          },
          {
            id: "needed_inc",
            user: true,
            trigger: "74",
            validator: (value) => {
              if (value.length === 0) {
                return "something must be entered!";
              } else if (value === " ") {
                return "something must be entered!";
              }
              return true;
            },
          },
          {
            id: "74",
            message: "Why do you think you need this amount each year?",
            trigger: "why_needed_inc",
          },
          {
            id: "why_needed_inc",
            user: true,
            trigger: "75",
            validator: (value) => {
              if (value.length === 0) {
                return "something must be entered!";
              } else if (value === " ") {
                return "something must be entered!";
              }
              return true;
            },
          },
          {
            id: "75",
            message: "Are you in debt?",
            trigger: "in_debt_y_n",
          },
          {
            id: "in_debt_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "76" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "financial_post",
              },
              { value: "no", label: "No", trigger: "financial_post" },
            ],
          },
          {
            id: "76",
            message: "If yes, does this imapact your mental health?",
            trigger: "debt_affect_mental_health",
          },
          {
            id: "debt_affect_mental_health",
            options: [
              { value: "yes", label: "Yes", trigger: "77" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "77",
              },
              { value: "no", label: "No", trigger: "77" },
            ],
          },
          {
            id: "77",
            message: "Are you seeking financial help?",
            trigger: "seeking_finanical_help",
          },
          {
            id: "seeking_finanical_help",
            options: [
              { value: "yes", label: "Yes", trigger: "78" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "78",
              },
              { value: "no", label: "No", trigger: "financial_post" },
            ],
          },
          {
            id: "78",
            message: "Has seeking help improved your mental health?",
            trigger: "seeking_help_improved_mental_health_y_n",
          },
          {
            id: "seeking_help_improved_mental_health_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "79" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "79",
              },
              { value: "no", label: "No", trigger: "financial_post" },
            ],
          },
          {
            id: "79",
            message: "How did seeking assistance help your mental health??",
            trigger: "seeking_help_improved_mental_health_how",
          },
          {
            id: "seeking_help_improved_mental_health_how",
            user: true,
            trigger: "financial_post",
            validator: (value) => {
              if (value.length === 0) {
                return "something must be entered!";
              } else if (value === " ") {
                return "something must be entered!";
              }
              return true;
            },
          },
          {
            id: "financial_post",
            component: <FinancialPost />,
            asMessage: true,
            end: true,
          },

          // {
          //   id: "part2",
          //   component: <Part2 />,
          //   asMessage: true,
          //   trigger: "end-message",
          // },

          {
            id: "end-message",
            message: "Thanks! Your data was submitted successfully!",
            end: true,
          },
        ]}
      />
    );
  }
}
export default Finanical;
