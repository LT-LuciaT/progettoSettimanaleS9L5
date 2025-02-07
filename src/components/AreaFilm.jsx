import { Component } from "react";

class AreaFilm extends Component {
  fetchSeries = async () => {
    const resp = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b55e94bb", {
      method: "GET",
    });

    if (resp.ok) {
      const film = await resp.json();
      console.log(film);
    }
  };
  render() {
    this.fetchSeries();
    return <div className="text-light">ecco i film</div>;
  }
}

export default AreaFilm;
