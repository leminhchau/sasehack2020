import React, { Component } from "react";
import Cards from "./Cards";
import { fetchData } from "../../api/index";
import styles from "./Home.module.css";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {},
  //   };
  // }
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1>Welcome to Patient Portal</h1>
        <h3>This is the current update of Covid 19 pandemic</h3>
        <h3>Please stay safe</h3>
        <Cards data={data} />
      </div>
    );
  }
}

export default Home;
