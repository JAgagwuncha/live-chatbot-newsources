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
    }
    axios
      .post("http://localhost:8080/demo", {
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

class BehaviorPost extends Component {
  state = {
    tester: ["name", "not"],
  };
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      pet_owner: "",
      type_pet: "",
      pet_choice_why: "",
      pet_mental_health_help: "",
      pet_mental_health_help_how: "",
      freinds: "",
      friends_how_often: "",
      friend_metal_health: "",
      friend_mental_health_help_how: "",
      religion: "",
      religion_haver: "",
      relgion_mental_health_why: "",
      religion_mental_health_how: "",
      news_choice: "",
      news_mental_health_choice: "",
      news_mental_health_impact: "",
      news_mental_health_impact_how: "",
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
      .post("http://localhost:8080/behavior", {
        name: user[0].value,
        pet_owner: user[1].value,
        type_pet: user[2].value,
        pet_choice_why: user[3].value,
        pet_mental_health_help: user[4].value,
        pet_mental_health_help_how: user[5].value,
        freinds: user[6].value,
        friends_how_often: user[7].value,
        friend_metal_health: user[8].value,
        friend_mental_health_help_how: user[9].value,
        religion: user[10].value,
        religion_haver: user[11].value,
        relgion_mental_health_why: user[12].value,
        religion_mental_health_how: user[13].value,
        news_choice: user[14].value,
        news_mental_health_choice: user[15].value,
        news_mental_health_impact: user[16].value,
        news_mental_health_impact_how: user[17].value,
      })
      .then((response) => {
        console.log(response);
      });
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
      name,
      pet_owner,
      type_pet,
      pet_choice_why,
      pet_mental_health_help,
      pet_mental_health_help_how,
      freinds,
      friends_how_often,
      friend_metal_health,
      friend_mental_health_help_how,
      religion,
      religion_haver,
      relgion_mental_health_why,
      religion_mental_health_how,
      news_choice,
      news_mental_health_choice,
      news_mental_health_impact,
      news_mental_health_impact_how,
    } = steps;
    const behaviour_data = [
      name,
      pet_owner,
      type_pet,
      pet_choice_why,
      pet_mental_health_help,
      pet_mental_health_help_how,
      freinds,
      friends_how_often,
      friend_metal_health,
      friend_mental_health_help_how,
      religion,
      religion_haver,
      relgion_mental_health_why,
      religion_mental_health_how,
      news_choice,
      news_mental_health_choice,
      news_mental_health_impact,
      news_mental_health_impact_how,
    ];
    for (var i = 0; i < behaviour_data.length; i++) {
      if (i.value === undefined) {
        console.log("its blank");
        this.setState({ value: "someothername" });
      }
    }
    // console.log(behaviour_data);
    this.register(behaviour_data);

    this.setState({
      name,
      pet_owner,
      type_pet,
      pet_choice_why,
      pet_mental_health_help,
      pet_mental_health_help_how,
      freinds,
      friends_how_often,
      friend_metal_health,
      friend_mental_health_help_how,
      religion,
      religion_haver,
      relgion_mental_health_why,
      religion_mental_health_how,
      news_choice,
      news_mental_health_choice,
      news_mental_health_impact,
      news_mental_health_impact_how,
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

BehaviorPost.propTypes = {
  steps: PropTypes.object,
};

BehaviorPost.defaultProps = {
  steps: undefined,
};

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
      .post("http://localhost:8080/family", {
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
        .post("http://localhost:8080/health_1", {
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
        .post("http://localhost:8080/health_2", {
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
        .post("http://localhost:8080/finanical", {
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
  

class FullChatbot extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "3",
            message: "Hi, this chatbot checks this, please consent",
            trigger: "consent",
          },
          {
            id: "consent",
            options: [
              { value: "yes", label: "Yes, I consent", trigger: "1" },
              { value: "no", label: "No, I do not consent", trigger: "end-message" },
            ]
          },
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
            end: false,
            trigger: "17",
          },
          //END OF FIRST////////////////////////
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
              { value: "maybe", label: "Maybe", trigger: "behaviour_post" },
              { value: "no", label: "No", trigger: "behaviour_post" },
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
            trigger: "behaviour_post",
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
            id: "behaviour_post",
            component: <BehaviorPost />,
            asMessage: true,
            end: false,
            trigger: "34",
          },
          //// END SECOND PART ////////////
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
            message:
              "Did you experience any conflict in your family as a child?",
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
              {
                value: "not saying",
                label: "Prefer not to say",
                trigger: "family_post",
              },
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
            end: false,
            trigger:"40"
          },
          /////////// HEALTH 1 STARTS HERE ////////////
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
            end: false,
            trigger:"57",
          },
          ///////// HEALTH 2 BEGIN HERE /////////////

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
            end: false,
            trigger:"71"
          },
          ///////////// FINANCIAL BEGIN HERE /////////////////

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

export default FullChatbot;
