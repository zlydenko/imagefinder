import React from "react";
import Axios from "axios";

export default function HistoryList(props) {
  const fetchHistories = () => {
    console.log("fetching histories");
    return [];
  };
  const [history, setHistory] = React.useState(fetchHistories);

  return <p>history</p>;
}

// export default class History extends React.Component {
//   constructor() {
//     const [history, setHistory] = React.useState([]);
//   }

//   componentWillMount() {
//     const { username } = this.props;
//     console.log(this.history);
//     console.log("history soon rendered");
//   }

//   fetchHistory(username) {
//     //   Axios.
//   }

//   render() {
//     return <HistoryList data={} />;
//   }
// }
