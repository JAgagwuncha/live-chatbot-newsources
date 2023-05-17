import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import axios from "axios";

class Health1Post extends Component {
  state = {
    tester: ["name", "not"],
  };
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      anxious_y_n: "",
      anxiety_triggers: "",
      anxiety_impact_life: "",
      major_medical_problem_y_n: "",
      major_problem_reasoning: "",
      major_problem_impact_life: "",
      mental_health_probs_y_n: "",
      mental_health_name: "",
      mh_problem_diagnosed: "",
      mh_diagnosed_by: "",
      mh_impact_daily: "",
      disability_y_n: "",
      disability_name: "",
      disability_problem_diagnosed: "",
      disability_who_diag: "",
      disability_daily_impact: "",
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
      .post("http://127.0.0.1:3000/health_1", {
        username: user[0].value,
        anxious_y_n: user[1].value,
        anxiety_triggers: user[2].value,
        anxiety_impact_life: user[3].value,
        major_medical_problem_y_n: user[4].value,
        major_problem_reasoning: user[5].value,
        major_problem_impact_life: user[6].value,
        mental_health_probs_y_n: user[7].value,
        mental_health_name: user[8].value,
        mh_problem_diagnosed: user[9].value,
        mh_diagnosed_by: user[10].value,
        mh_impact_daily: user[11].value,
        disability_y_n: user[12].value,
        disability_problem_diagnosed: user[13].value,
        disability_who_diag: user[14].value,
        disability_daily_impact: user[15].value,
      })
      .then((response) => {
        console.log(response);
      });
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
      name,
      anxious_y_n,
      anxiety_triggers,
      anxiety_impact_life,
      major_medical_problem_y_n,
      major_problem_reasoning,
      major_problem_impact_life,
      mental_health_probs_y_n,
      mental_health_name,
      mh_problem_diagnosed,
      mh_diagnosed_by,
      mh_impact_daily,
      disability_y_n,
      disability_name,
      disability_problem_diagnosed,
      disability_who_diag,
      disability_daily_impact,
    } = steps;
    const health1_data = [
      name,
      anxious_y_n,
      anxiety_triggers,
      anxiety_impact_life,
      major_medical_problem_y_n,
      major_problem_reasoning,
      major_problem_impact_life,
      mental_health_probs_y_n,
      mental_health_name,
      mh_problem_diagnosed,
      mh_diagnosed_by,
      mh_impact_daily,
      disability_y_n,
      disability_name,
      disability_problem_diagnosed,
      disability_who_diag,
      disability_daily_impact,
    ];
    for (var i = 0; i < health1_data.length; i++) {
      if (i.value === undefined) {
        console.log("its blank");
        this.setState({ value: "someothername" });
      }
    }
    // console.log(health1_data);
    this.register(health1_data);

    this.setState({
      name,
      anxious_y_n,
      anxiety_triggers,
      anxiety_impact_life,
      major_medical_problem_y_n,
      major_problem_reasoning,
      major_problem_impact_life,
      mental_health_probs_y_n,
      mental_health_name,
      mh_problem_diagnosed,
      mh_diagnosed_by,
      mh_impact_daily,
      disability_y_n,
      disability_name,
      disability_problem_diagnosed,
      disability_who_diag,
      disability_daily_impact,
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

Health1Post.propTypes = {
  steps: PropTypes.object,
};

Health1Post.defaultProps = {
  steps: undefined,
};

class Health1 extends Component {
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
            trigger: "40",
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
            id: "40",
            message: "Are you someone that gets anxious easily?",
            trigger: "anxious_y_n",
          },
          {
            id: "anxious_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "41" },
              { value: "no", label: "No", trigger: "43" },
            ],
          },
          {
            id: "41",
            message: "If so, what sort of things make you anxious?",
            trigger: "anxiety_triggers",
          },
          {
            id: "anxiety_triggers",
            user: true,
            trigger: "42",
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
            id: "42",
            message: "How does it impact your daily life?",
            trigger: "anxiety_impact_life",
          },
          {
            id: "anxiety_impact_life",
            user: true,
            trigger: "43",
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
            id: "43",
            message:
              "Are you currently being treated for a major medical problem (not disability or mental health)?",
            trigger: "major_medical_problem_y_n",
          },
          {
            id: "major_medical_problem_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "44" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "46",
              },
              { value: "no", label: "No", trigger: "46" },
            ],
          },
          {
            id: "44",
            message: "If yes please advise the medical problems",
            trigger: "major_problem_reasoning",
          },
          {
            id: "major_problem_reasoning",
            user: true,
            trigger: "45",
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
            id: "45",
            message: "How does this impact your day to day life?",
            trigger: "major_problem_impact_life",
          },
          {
            id: "major_problem_impact_life",
            user: true,
            trigger: "46",
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
            id: "46",
            message: "Do you suffer from mental health illess/es?",
            trigger: "mental_health_probs_y_n",
          },
          {
            id: "mental_health_probs_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "48" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "52",
              },
              { value: "no", label: "No", trigger: "52" },
            ],
          },
          {
            id: "48",
            message: "If yes, what mental health issues do you deal with?",
            trigger: "mental_health_name",
          },
          {
            id: "mental_health_name",
            user: true,
            trigger: "49",
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
            id: "49",
            message:
              "Have you been officially diagnosed or are you self-diagnosed?",
            trigger: "mh_problem_diagnosed",
          },
          {
            id: "mh_problem_diagnosed",
            options: [
              { value: "diagnosed", label: "Diagnosed", trigger: "50" },
              {
                value: "self diagnosed",
                label: "Self diagnosed",
                trigger: "51",
              },
            ],
          },
          {
            id: "50",
            message: "If officially diagnosed, who completed the diagnosis?",
            trigger: "mh_diagnosed_by",
          },
          {
            id: "mh_diagnosed_by",
            options: [
              { value: "gp", label: "GP", trigger: "51" },
              { value: "counsellor", label: "Counsellor", trigger: "51" },
              { value: "psychologist", label: "Psychologist", trigger: "51" },
              { value: "psychatrist", label: "Psychatrist", trigger: "51" },
              { value: "other", label: "Other", trigger: "51" },
            ],
          },
          {
            id: "51",
            message: "How do your mental health issue/s effect you?",
            trigger: "mh_impact_daily",
          },
          {
            id: "mh_impact_daily",
            user: true,
            trigger: "52",
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
            id: "52",
            message: "Do you suffer from diability/ies?",
            trigger: "disability_y_n",
          },
          {
            id: "disability_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "53" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "health1_post",
              },
              { value: "no", label: "No", trigger: "health1_post" },
            ],
          },
          {
            id: "53",
            message: "If yes, what disability/ies do you deal with?",
            trigger: "disability_name",
          },
          {
            id: "disability_name",
            user: true,
            trigger: "54",
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
            id: "54",
            message:
              "Have you been officially diagnosed or are you self-diagnosed?",
            trigger: "disability_problem_diagnosed",
          },
          {
            id: "disability_problem_diagnosed",
            options: [
              { value: "diagnosed", label: "Diagnosed", trigger: "55" },
              {
                value: "self diagnosed",
                label: "Self diagnosed",
                trigger: "56",
              },
            ],
          },
          {
            id: "55",
            message: "If officially diagnosed, who completed the diagnosis?",
            trigger: "disability_who_diag",
          },
          {
            id: "disability_who_diag",
            options: [
              { value: "gp", label: "GP", trigger: "56" },
              { value: "counsellor", label: "Counsellor", trigger: "56" },
              { value: "psychologist", label: "Psychologist", trigger: "56" },
              { value: "psychatrist", label: "Psychatrist", trigger: "56" },
              { value: "other", label: "Other", trigger: "56" },
            ],
          },
          {
            id: "56",
            message: "How do your mental health issue/s effect you?",
            trigger: "disability_daily_impact",
          },
          {
            id: "disability_daily_impact",
            user: true,
            trigger: "health1_post",
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
            id: "health1_post",
            component: <Health1Post />,
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
export default Health1;
