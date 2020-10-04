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
        <Cards data={data} />
      </div>
    );
  }
}

export default Home;

// import React from "react";

// function Home() {
//   return <div>This is HOMEPAGE</div>;
// }

// export default Home;
