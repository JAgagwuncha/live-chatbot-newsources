import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import axios from "axios";

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
    for(var i=0; i <user.length;i++){
      const placeholder = {id: 'placeholder', message: 'placeholder', value: 'none', metadata: undefined}
        if(user[i] === undefined){
            user.splice(i, 1, placeholder)
        }
    console.log(user)
    }
    axios.defaults.baseURL = 'http://localhost:3003';

    axios.get('http://127.0.0.1:3003').then(resp => {
    console.log(resp.data);
});

    axios
      .post("http://127.0.0.1:3003/behavior", {
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
      if ((i.value === undefined)) {
        console.log("its blank")
        this.setState({ value: 'someothername'});
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

class Behavior extends Component {
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
            trigger: "17",
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
export default Behavior;
