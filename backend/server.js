const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
//create database connection
const db = mysql.createConnection({
  host: 'http://127.0.0.1:3000/',
  user: "NewSourcesu@localhost",
  password: "015078$PmTP%nSo]zsZ",
  database: "NewSourcesdb",
});

//connect to database
db.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

app.post("/demo", (req, res) => {
  const username = req.body.name;
  const gender = req.body.gender;
  const age = req.body.age;
  const nationality = req.body.nationality;
  const current_occupation = req.body.current_occupation;
  const enjoy_occupation = req.body.enjoy_occupation;
  const occupation_explanation = req.body.occupation_explanation;
  const postcode = req.body.postcode;
  const enjoy_living_at_home = req.body.enjoy_living_at_home;
  const explain_enjoy_home = req.body.explain_enjoy_home;
  const thinking_of_moving = req.body.thinking_of_moving;
  const explain_move = req.body.explain_move;
  const ni_number = req.body.ni_number;
  console.log(
    "These are the values",
    username,
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
    ni_number
  );
  db.query(
    "INSERT INTO demo (username, gender, age, nationality,current_occupation," +
      "enjoy_occupation,occupation_explanation,postcode,enjoy_living_at_home," +
      "explain_enjoy_home,thinking_of_moving,explain_move,ni_number)" +
      "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      username,
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
    ]
  ),
    (err, result) => {
      console.log(err, result);
    };
});

app.post("/behavior", (req, res) => {
  const username = req.body.name;
  const pet_owner = req.body.pet_owner;
  const type_pet = req.body.type_pet;
  const pet_choice_why = req.body.pet_choice_why;
  const pet_mental_health_help = req.body.pet_mental_health_help;
  const pet_mental_health_help_how = req.body.pet_mental_health_help_how;
  const freinds = req.body.freinds;
  const friends_how_often = req.body.friends_how_often;
  const friend_metal_health = req.body.friend_metal_health;
  const friend_mental_health_help_how = req.body.friend_mental_health_help_how;
  const religion = req.body.religion;
  const religion_haver = req.body.religion_haver;
  const relgion_mental_health_choice = req.body.relgion_mental_health_choice;
  const religion_mental_health_how = req.body.religion_mental_health_how;
  const news_choice = req.body.news_choice;
  const news_mental_health_choice = req.body.news_mental_health_choice;
  const news_mental_health_impact = req.body.news_mental_health_impact;
  const news_mental_health_impact_how = req.body.news_mental_health_impact_how;

  db.query(
    "INSERT INTO behavior (username,pet_owner,type_pet,pet_choice_why,pet_mental_health_help," +
      "pet_mental_health_help_how,freinds,friends_how_often,friend_metal_health," +
      "friend_mental_health_help_how,religion,religion_haver,relgion_mental_health_choice," +
      "religion_mental_health_how,news_choice,news_mental_health_choice," +
      "news_mental_health_impact,news_mental_health_impact_how)" +
      "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      username,
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
      relgion_mental_health_choice,
      religion_mental_health_how,
      news_choice,
      news_mental_health_choice,
      news_mental_health_impact,
      news_mental_health_impact_how,
    ]
  ),
    (err, result) => {
      console.log(err, result);
    };
});

app.post("/family", (req, res) => {
  const username = req.body.name;
  const sibling_y_n = req.body.sibling_y_n;
  const like_siblings = req.body.like_siblings;
  const why_no = req.body.why_no;
  const family_conflict = req.body.family_conflict;
  const conflict_mental_health_y_n = req.body.conflict_mental_health_y_n;
  const conflict_mental_how = req.body.conflict_mental_how;

  db.query(
    "INSERT INTO family_rships (username,sibling_y_n,like_siblings,why_no," +
      "family_conflict,conflict_mental_health_y_n,conflict_mental_how)" +
      "VALUES (?,?,?,?,?,?,?)",
    [
      username,
      sibling_y_n,
      like_siblings,
      why_no,
      family_conflict,
      conflict_mental_health_y_n,
      conflict_mental_how,
    ]
  ),
    (err, result) => {
      console.log(err, result);
    };
});

app.post("/health_1", (req, res) => {
  const username = req.body.username;
  const anxious_y_n = req.body.anxious_y_n;
  const anxiety_triggers = req.body.anxiety_triggers;
  const anxiety_impact_life = req.body.anxiety_impact_life;
  const major_medical_problem_y_n = req.body.major_medical_problem_y_n;
  const major_problem_reasoning = req.body.major_problem_reasoning;
  const major_problem_impact_life = req.body.major_problem_impact_life;
  const mental_health_probs_y_n = req.body.mental_health_probs_y_n;
  const mental_health_name = req.body.mental_health_name;
  const mh_problem_diagnosed = req.body.mh_problem_diagnosed;
  const mh_diagnosed_by = req.body.mh_diagnosed_by;
  const mh_impact_daily = req.body.mh_impact_daily;
  const disability_y_n = req.body.disability_y_n;
  const disability_name = req.body.disability_name;
  const disability_problem_diagnosed = req.body.disability_problem_diagnosed;
  const disability_who_diag = req.body.disability_who_diag;
  const disability_daily_impact = req.body.disability_daily_impact;
  db.query(
    "INSERT INTO health_1 (username, anxious_y_n,anxiety_triggers,anxiety_impact_life," +
      "major_medical_problem_y_n,major_problem_reasoning,major_problem_impact_life,mental_health_probs_y_n," +
      "mental_health_name,mh_problem_diagnosed,mh_diagnosed_by,mh_impact_daily,disability_y_n," +
      "disability_name,disability_problem_diagnosed,disability_who_diag,disability_daily_impact)" +
      "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      username,
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
    ]
  ),
    (err, result) => {
      console.log(err, result);
    };
});

app.post("/health_2", (req, res) => {
  const username = req.body.username;
  const catch_covid_y_n = req.body.catch_covid_y_n;
  const fully_recovered_y_n = req.body.fully_recovered_y_n;
  const symptoms_long_covid = req.body.symptoms_long_covid;
  const long_covid_life_impact = req.body.long_covid_life_impact;
  const vaccinated_y_n = req.body.vaccinated_y_n;
  const vaccine_choice_why = req.body.vaccine_choice_why;
  const alcohol_units_weekly = req.body.alcohol_units_weekly;
  const alcohol_problem_y_n = req.body.alcohol_problem_y_n;
  const alcohol_seeking_help_y_n = req.body.alcohol_seeking_help_y_n;
  const alchohol_impact_life = req.body.alchohol_impact_life;
  const drugs_taken = req.body.drugs_taken;
  const drug_problem_y_n = req.body.drug_problem_y_n;
  const drugs_seeking_help_y_n = req.body.drugs_seeking_help_y_n;
  const drugs_impact_life = req.body.drugs_impact_life;
  db.query(
    "INSERT INTO health_2 (username, catch_covid_y_n, fully_recovered_y_n,symptoms_long_covid," +
      "long_covid_life_impact,vaccinated_y_n,vaccine_choice_why,alcohol_units_weekly,alcohol_problem_y_n," +
      "alcohol_seeking_help_y_n,alchohol_impact_life,drugs_taken,drug_problem_y_n," +
      "drugs_seeking_help_y_n,drugs_impact_life)" +
      "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      username,
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
    ]
  ),
    (err, result) => {
      console.log(err, result);
    };
});

app.post("/finanical", (req, res) => {
  const username = req.body.name;
  const annual_inc = req.body.annual_inc;
  const inc_enough_y_n = req.body.inc_enough_y_n;
  const needed_inc = req.body.needed_inc;
  const why_needed_inc = req.body.why_needed_inc;
  const in_debt_y_n = req.body.in_debt_y_n;
  const debt_affect_mental_health = req.body.debt_affect_mental_health;
  const seeking_finanical_help = req.body.seeking_finanical_help;
  const seeking_help_improved_mental_health_y_n =
    req.body.seeking_help_improved_mental_health_y_n;
  const seeking_help_improved_mental_health_how =
    req.body.seeking_help_improved_mental_health_how;
  db.query(
    "INSERT INTO finanical (username, annual_inc,inc_enough_y_n,needed_inc," +
      "why_needed_inc,in_debt_y_n,debt_affect_mental_health,seeking_finanical_help," +
      "seeking_help_improved_mental_health_y_n, seeking_help_improved_mental_health_how)" +
      "VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      username,
      annual_inc,
      inc_enough_y_n,
      needed_inc,
      why_needed_inc,
      in_debt_y_n,
      debt_affect_mental_health,
      seeking_finanical_help,
      seeking_help_improved_mental_health_y_n,
      seeking_help_improved_mental_health_how,
    ]
  ),
    (err, result) => {
      console.log(err, result);
    };
});

app.listen(3000, '127.0.0.1', () => {
  console.log("Server running successfully on 3000");
});
