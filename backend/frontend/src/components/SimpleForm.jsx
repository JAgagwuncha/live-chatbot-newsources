import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import axios from "axios";

class Demo_post extends Component {
  state = {
    tester: ["name", "not"],
  };
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
      nationality: "",
      current_occupation: "",
      enjoy_occupation: "",
      occupation_explanation: "",
      postcode: "",
      enjoy_living_at_home: "",
      explain_enjoy_home: "",
      thinking_of_moving: "",
      explain_move: "",
      ni_number: "",
    };
  }
  register(user) {
    // console.log(user[0].value);
    // console.log(user[1].value);
    // console.log(user[2].value);
    // console.log(user[3].value);
    axios
      .post("http://127.0.0.1:3000/register", {
        name: user[0].value,
        gender: user[1].value,
        age: user[2].value,
        nationality: user[3].value,
        current_occupation: user[4].value,
        enjoy_occupation: user[5].value,
        occupation_explanation: user[6].value,
        postcode: user[7].value,
        enjoy_living_at_home: user[8].value,
        explain_enjoy_home: user[9].value,
        thinking_of_moving: user[10].value,
        explain_move: user[11].value,
        ni_number: user[12].value,
      })
      .then((response) => {
        console.log(response);
      });
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
      name,
      gender,
      age,
      nationality,
      current_occupation,
      enjoy_occupation,
      occupation_explanation,
      postcode,
      enjoy_living_at_home,
      explain_enjoy_home,
      thinking_of_moving,
      explain_move,
      ni_number,
    } = steps;
    const demo_data = [
      name,
      gender,
      age,
      nationality,
      current_occupation,
      enjoy_occupation,
      occupation_explanation,
      postcode,
      enjoy_living_at_home,
      explain_enjoy_home,
      thinking_of_moving,
      explain_move,
      ni_number,
    ];
    console.log(explain_move.value, "this is the value");
    this.register(demo_data);

    this.setState({
      name,
      gender,
      age,
      nationality,
      current_occupation,
      enjoy_occupation,
      occupation_explanation,
      postcode,
      enjoy_living_at_home,
      explain_enjoy_home,
      thinking_of_moving,
      explain_move,
      ni_number,
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

Demo_post.propTypes = {
  steps: PropTypes.object,
};

Demo_post.defaultProps = {
  steps: undefined,
};


class SimpleForm extends Component {
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
            trigger: "3",
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
            id: "3",
            message: "Hi {previousValue}! What is your gender?",
            trigger: "gender",
          },
          {
            id: "gender",
            options: [
              { value: "male", label: "Male", trigger: "5" },
              { value: "female", label: "Female", trigger: "5" },
              { value: "non-binary", label: "Non-binary", trigger: "5" },
              { value: "prefer", label: "Prefer not to say", trigger: "5" },
            ],
          },
          {
            id: "5",
            message: "How old are you?",
            trigger: "age",
          },
          {
            id: "age",
            user: true,
            trigger: "7",
            validator: (value) => {
              if (isNaN(value)) {
                return "value must be a number";
              } else if (value < 0) {
                return "value must be positive";
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: "7",
            message: "What is your nationality?",
            trigger: "nationality",
          },
          {
            id: "nationality",
            user: true,
            trigger: "8",
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
            id: "8",
            message: "What is your occupation/course of study?",
            trigger: "current_occupation",
          },
          {
            id: "current_occupation",
            user: true,
            trigger: "9",
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
            id: "9",
            message: "Do you enjoy your work/studies?",
            trigger: "enjoy_occupation",
          },
          {
            id: "enjoy_occupation",
            options: [
              { value: "yes", label: "Yes", trigger: "10" },
              { value: "no", label: "No", trigger: "10" },
            ],
          },

          {
            id: "10",
            message: "Please explain your answer",
            trigger: "occupation_explanation",
          },
          {
            id: "occupation_explanation",
            user: true,
            trigger: "11",
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
            id: "11",
            message: "What is your home postcode",
            trigger: "postcode",
          },
          {
            id: "postcode",
            user: true,
            trigger: "12",
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
            id: "12",
            message: "Do you enjoy living there?",
            trigger: "enjoy_living_at_home",
          },
          {
            id: "enjoy_living_at_home",
            options: [
              { value: "yes", label: "Yes", trigger: "13" },
              { value: "no", label: "No", trigger: "13" },
            ],
          },

          {
            id: "13",
            message: "Please explain your answer",
            trigger: "explain_enjoy_home",
          },
          {
            id: "explain_enjoy_home",
            user: true,
            trigger: "14",
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
            id: "14",
            message: "Are you thinking of moving?",
            trigger: "thinking_of_moving",
          },
          {
            id: "thinking_of_moving",
            options: [
              { value: "yes", label: "Yes", trigger: "15" },
              { value: "no", label: "No", trigger: "15" },
            ],
          },
          {
            id: "15",
            message: "Please explain your answer",
            trigger: "explain_move",
          },
          {
            id: "explain_move",
            user: true,
            trigger: "16",
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
            id: "16",
            message:
              "What is your NI Number? Please enter N/A if you do not wish to enter it",
            trigger: "ni_number",
          },
          {
            id: "ni_number",
            user: true,
            trigger: "demo_post",
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
            id: "demo_post",
            component: <Demo_post />,
            asMessage: true,
            end: true,
          },

          {
            id: "17",
            message: "Do you own a pet?",
            trigger: "pet_owner",
          },
          {
            id: "pet_owner",
            options: [
              { value: "yes", label: "Yes", trigger: "18" },
              { value: "no", label: "No", trigger: "22" },
            ],
          },
          {
            id: "18",
            message: "If yes, what type of pet? Cat, dog, etc?",
            trigger: "type_pet",
          },
          {
            id: "type_pet",
            user: true,
            trigger: "19",
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
            id: "19",
            message: "Why did you choose this type of pet?",
            trigger: "pet_choice_why",
          },
          {
            id: "pet_choice_why",
            user: true,
            trigger: "20",
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
            id: "20",
            message: "Do you feel having a pet helps with your mental health?",
            trigger: "pet_mental_health_help",
          },
          {
            id: "pet_mental_health_help",
            options: [
              { value: "yes", label: "Yes", trigger: "21" },
              { value: "no", label: "No", trigger: "22" },
            ],
          },
          {
            id: "21",
            message: "If so how does it help your mental health?",
            trigger: "pet_mental_health_help_how",
          },
          {
            id: "pet_mental_health_help_how",
            user: true,
            trigger: "22",
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
            id: "22",
            message: "Do you have more than 2 or 3 close freinds?",
            trigger: "freinds",
          },
          {
            id: "freinds",
            options: [
              { value: "yes", label: "Yes", trigger: "23" },
              { value: "no", label: "No", trigger: "26" },
            ],
          },

          {
            id: "23",
            message: "How often do you speak to them?",
            trigger: "friends_how_often",
          },
          {
            id: "friends_how_often",
            options: [
              { value: "daily", label: "Daily", trigger: "24" },
              { value: "weekly", label: "Weekly", trigger: "24" },
              { value: "monthly", label: "Monthly", trigger: "24" },
              { value: "less", label: "Less than that", trigger: "24" },
            ],
          },
          {
            id: "24",
            message: "Do they help you maintain your mental health?",
            trigger: "friend_metal_health",
          },
          {
            id: "friend_metal_health",
            options: [
              { value: "yes", label: "Yes", trigger: "25" },
              { value: "maybe", label: "Maybe", trigger: "25" },
              { value: "no", label: "No", trigger: "26" },
            ],
          },
          {
            id: "25",
            message: "If so, how?",
            trigger: "friend_mental_health_help_how",
          },
          {
            id: "friend_mental_health_help_how",
            user: true,
            trigger: "26",
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
            id: "26",
            message: "Are you religious?",
            trigger: "religion",
          },
          {
            id: "religion",
            options: [
              { value: "yes", label: "Yes", trigger: "27" },
              { value: "no", label: "No", trigger: "30" },
            ],
          },
          {
            id: "27",
            message:
              "If yes, what religion do you associate with e.g. catholic, muslim, hinduism, Buddhism, etc.?",
            trigger: "religion_haver",
          },
          {
            id: "religion_haver",
            user: true,
            trigger: "28",
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
            id: "28",
            message: "Does it help you maintain your mental health?",
            trigger: "relgion_mental_health_choice",
          },
          {
            id: "relgion_mental_health_choice",
            options: [
              { value: "yes", label: "Yes", trigger: "29" },
              { value: "maybe", label: "Maybe", trigger: "30" },
              { value: "no", label: "No", trigger: "30" },
            ],
          },
          {
            id: "29",
            message: "If so, how?",
            trigger: "religion_mental_health_how",
          },
          {
            id: "religion_mental_health_how",
            user: true,
            trigger: "30",
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
            id: "30",
            message:
              "Do you feel watching and/or reading the daily news increases your anxiety about the world you live in?",
            trigger: "news_choice",
          },
          {
            id: "news_choice",
            options: [
              { value: "yes", label: "Yes", trigger: "31" },
              { value: "no", label: "No", trigger: "31" },
              {
                value: "not saying",
                label: "Prefer to not say",
                trigger: "31",
              },
            ],
          },
          {
            id: "31",
            message: "Please explain your choice",
            trigger: "news_mental_health_choice",
          },
          {
            id: "news_mental_health_choice",
            user: true,
            trigger: "32",
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
            id: "32",
            message: "Does it impact your mental health?",
            trigger: "news_mental_health_impact",
          },
          {
            id: "news_mental_health_impact",
            options: [
              { value: "yes", label: "Yes", trigger: "33" },
              { value: "maybe", label: "Maybe", trigger: "end_message" },
              { value: "no", label: "No", trigger: "end_message" },
            ],
          },
          {
            id: "33",
            message: "If so, how?",
            trigger: "news_mental_health_impact_how",
          },
          {
            id: "news_mental_health_impact_how",
            user: true,
            trigger: "end_message",
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
            id: "end_message",
            message: "If so, how?",
            trigger: "end_message",
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

export default SimpleForm;
