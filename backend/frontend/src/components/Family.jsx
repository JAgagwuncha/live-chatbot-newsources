import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import axios from "axios";

class FamilyPost extends Component {
  state = {
    tester: ["name", "not"],
  };
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sibling_y_n: "",
      like_siblings: "",
      why_no: "",
      family_conflict: "",
      conflict_mental_health_y_n: "",
      conflict_mental_how: "",
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
      .post("http://127.0.0.1:3000/family", {
        name: user[0].value,
        sibling_y_n: user[1].value,
        like_siblings: user[2].value,
        why_no: user[3].value,
        family_conflict: user[4].value,
        conflict_mental_health_y_n: user[5].value,
        conflict_mental_how: user[6].value,
      })
      .then((response) => {
        console.log(response);
      });
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
        name,
        sibling_y_n,
        like_siblings,
        why_no,
        family_conflict,
        conflict_mental_health_y_n,
        conflict_mental_how,
    } = steps;
    const family_data = [
      name,
      sibling_y_n,
      like_siblings,
      why_no,
      family_conflict,
      conflict_mental_health_y_n,
      conflict_mental_how,
    ];
    for (var i = 0; i < family_data.length; i++) {
      if (i.value === undefined) {
        console.log("its blank");
        this.setState({ value: "someothername" });
      }
    }
    // console.log(family_data);
    this.register(family_data);

    this.setState({
        name,
        sibling_y_n,
        like_siblings,
        why_no,
        family_conflict,
        conflict_mental_health_y_n,
        conflict_mental_how,
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

FamilyPost.propTypes = {
  steps: PropTypes.object,
};

FamilyPost.defaultProps = {
  steps: undefined,
};

class Family extends Component {
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
            trigger: "34",
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
            id: "34",
            message: "Do you have any siblings?",
            trigger: "sibling_y_n",
          },
          {
            id: "sibling_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "35" },
              { value: "no", label: "No", trigger: "37" },
            ],
          },
          {
            id: "35",
            message: "Do you like your siblings?",
            trigger: "like_siblings",
          },
          {
            id: "like_siblings",
            options: [
                { value: "yes", label: "Yes", trigger: "37" },
                { value: "no", label: "No", trigger: "36" },
              ],
          },
          {
            id: "36",
            message: "If no, why don't you like them?",
            trigger: "why_no",
          },
          {
            id: "why_no",
            user: true,
            trigger: "37",
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
            id: "37",
            message: "Did you experience any conflict in your family as a child?",
            trigger: "family_conflict",
          },
          {
            id: "family_conflict",
            options: [
              { value: "yes", label: "Yes", trigger: "38" },
              { value: "no", label: "No", trigger: "family_post" },
            ],
          },
          {
            id: "38",
            message: "If does it still impact your mental health?",
            trigger: "conflict_mental_health_y_n",
          },
          {
            id: "conflict_mental_health_y_n",
            options: [
                { value: "yes", label: "Yes", trigger: "39" },
                { value: "not saying", label: "Prefer not to say", trigger: "family_post" },
                { value: "no", label: "No", trigger: "family_post" },
              ],
          },
          {
            id: "39",
            message: "If no, why don't you like them?",
            trigger: "conflict_mental_how",
          },
          {
            id: "conflict_mental_how",
            user: true,
            trigger: "family_post",
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
            id: "family_post",
            component: <FamilyPost />,
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
export default Family;
