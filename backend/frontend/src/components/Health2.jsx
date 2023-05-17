import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import axios from "axios";

class Health2Post extends Component {
  state = {
    tester: ["name", "not"],
  };
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      catch_covid_y_n: "",
      fully_recovered_y_n: "",
      symptoms_long_covid: "",
      long_covid_life_impact: "",
      vaccinated_y_n: "",
      vaccine_choice_why: "",
      alcohol_units_weekly: "",
      alcohol_problem_y_n: "",
      alcohol_seeking_help_y_n: "",
      alchohol_impact_life: "",
      drugs_taken: "",
      drug_problem_y_n: "",
      drugs_seeking_help_y_n: "",
      drugs_impact_life: "",
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
      .post("http://127.0.0.1:3000/health_2", {
        username: user[0].value,
        catch_covid_y_n: user[1].value,
        fully_recovered_y_n: user[2].value,
        symptoms_long_covid: user[3].value,
        long_covid_life_impact: user[4].value,
        vaccinated_y_n: user[5].value,
        vaccine_choice_why: user[6].value,
        alcohol_units_weekly: user[7].value,
        alcohol_problem_y_n: user[8].value,
        alcohol_seeking_help_y_n: user[9].value,
        alchohol_impact_life: user[10].value,
        drugs_taken: user[11].value,
        drug_problem_y_n: user[12].value,
        drugs_seeking_help_y_n: user[13].value,
        drugs_impact_life: user[14].value,
      })
      .then((response) => {
        console.log(response);
      });
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
      name,
      catch_covid_y_n,
      fully_recovered_y_n,
      symptoms_long_covid,
      long_covid_life_impact,
      vaccinated_y_n,
      vaccine_choice_why,
      alcohol_units_weekly,
      alcohol_problem_y_n,
      alcohol_seeking_help_y_n,
      alchohol_impact_life,
      drugs_taken,
      drug_problem_y_n,
      drugs_seeking_help_y_n,
      drugs_impact_life,
    } = steps;
    const health2_data = [
      name,
      catch_covid_y_n,
      fully_recovered_y_n,
      symptoms_long_covid,
      long_covid_life_impact,
      vaccinated_y_n,
      vaccine_choice_why,
      alcohol_units_weekly,
      alcohol_problem_y_n,
      alcohol_seeking_help_y_n,
      alchohol_impact_life,
      drugs_taken,
      drug_problem_y_n,
      drugs_seeking_help_y_n,
      drugs_impact_life,
    ];
    for (var i = 0; i < health2_data.length; i++) {
      if (i.value === undefined) {
        console.log("its blank");
        this.setState({ value: "someothername" });
      }
    }
    // console.log(health2_data);
    this.register(health2_data);

    this.setState({
      name,
      catch_covid_y_n,
      fully_recovered_y_n,
      symptoms_long_covid,
      long_covid_life_impact,
      vaccinated_y_n,
      vaccine_choice_why,
      alcohol_units_weekly,
      alcohol_problem_y_n,
      alcohol_seeking_help_y_n,
      alchohol_impact_life,
      drugs_taken,
      drug_problem_y_n,
      drugs_seeking_help_y_n,
      drugs_impact_life,
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

Health2Post.propTypes = {
  steps: PropTypes.object,
};

Health2Post.defaultProps = {
  steps: undefined,
};

class Health2 extends Component {
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
            trigger: "57",
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
            id: "57",
            message: "Did you catch COVID-19 during the pandemic?",
            trigger: "catch_covid_y_n",
          },
          {
            id: "catch_covid_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "58" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "61",
              },
              { value: "no", label: "No", trigger: "61" },
            ],
          },
          {
            id: "58",
            message:
              "If so, are you fully recovered or still recovering/suffering from long COVID symptoms?",
            trigger: "fully_recovered_y_n",
          },
          {
            id: "fully_recovered_y_n",
            options: [
              {
                value: "Fully recovered",
                label: "Fully recovered",
                trigger: "59",
              },
              {
                value: "not recovered",
                label: "Not fully recovered",
                trigger: "61",
              },
            ],
          },
          {
            id: "59",
            message: "If still suffering, what symptoms do you suffer from?",
            trigger: "symptoms_long_covid",
          },
          {
            id: "symptoms_long_covid",
            user: true,
            trigger: "60",
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
            id: "60",
            message: "How does it impact your life?",
            trigger: "long_covid_life_impact",
          },
          {
            id: "long_covid_life_impact",
            user: true,
            trigger: "61",
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
            id: "61",
            message:
              "Have you taken up the offer of Covid-19 vaccinations to help protect from hospitalisation?",
            trigger: "vaccinated_y_n",
          },
          {
            id: "vaccinated_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "62" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "63",
              },
              { value: "no", label: "No", trigger: "62" },
            ],
          },
          {
            id: "62",
            message: "If yes or no, please explain why you made this choice",
            trigger: "vaccine_choice_why",
          },
          {
            id: "vaccine_choice_why",
            user: true,
            trigger: "63",
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
            id: "63",
            message:
              "How many units of alchohol do you drink in a typical week?",
            trigger: "alcohol_units_weekly",
          },
          {
            id: "alcohol_units_weekly",
            options: [
              { value: "zero", label: "Zero", trigger: "67" },
              { value: "1-6", label: "1 - 6", trigger: "64" },
              { value: "7-14", label: "7 - 14", trigger: "64" },
              { value: "15+", label: "More than 15", trigger: "64" },
            ],
          },
          {
            id: "64",
            message: "Do you believe you have an alcohol abuse problem?",
            trigger: "alcohol_problem_y_n",
          },
          {
            id: "alcohol_problem_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "65" },
              { value: "no", label: "No", trigger: "67" },
            ],
          },
          {
            id: "65",
            message: "If yes, are you seeking help?",
            trigger: "alcohol_seeking_help_y_n",
          },
          {
            id: "alcohol_seeking_help_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "66" },
              { value: "no", label: "No", trigger: "66" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "66",
              },
            ],
          },
          {
            id: "66",
            message: "How does this impact your daily life?",
            trigger: "alchohol_impact_life",
          },
          {
            id: "alchohol_impact_life",
            user: true,
            trigger: "67",
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
            id: "67",
            message: "Have you ever taken drugs?",
            trigger: "drugs_taken",
          },
          {
            id: "drugs_taken",
            options: [
              { value: "prescribed", label: "Prescribed", trigger: "68" },
              { value: "illegal", label: "Illegal", trigger: "68" },
              { value: "both", label: "Both", trigger: "68" },
              { value: "No", label: "No", trigger: "health2_post" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "68",
              },
            ],
          },
          {
            id: "68",
            message: "Do you believe you have a drug abuse problem?",
            trigger: "drug_problem_y_n",
          },
          {
            id: "drug_problem_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "69" },
              { value: "no", label: "No", trigger: "health2_post" },
            ],
          },
          {
            id: "69",
            message: "If yes, are you seeking help?",
            trigger: "drugs_seeking_help_y_n",
          },
          {
            id: "drugs_seeking_help_y_n",
            options: [
              { value: "yes", label: "Yes", trigger: "70" },
              { value: "no", label: "No", trigger: "70" },
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "70",
              },
            ],
          },
          {
            id: "70",
            message: "How does this impact your daily life?",
            trigger: "drugs_impact_life",
          },
          {
            id: "drugs_impact_life",
            user: true,
            trigger: "health2_post",
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
            id: "health2_post",
            component: <Health2Post />,
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
export default Health2;
