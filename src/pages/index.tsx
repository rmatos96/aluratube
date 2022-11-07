import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";
import config from "../../config.json";

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists} favourites={config.favourites} />
    </div>
  )
}
