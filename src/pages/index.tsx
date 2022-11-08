import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";
import config from "../../config.json";
import { useState } from "react";

export default function Home() {
  const [filterValue, setfilterValue] = useState("")

  return (
    <div>
      <Menu filterValue={filterValue} setFilterValue={setfilterValue} />
      <Header />
      <Timeline searchValue={filterValue} playlists={config.playlists} favourites={config.favourites} />
    </div>
  )
}
