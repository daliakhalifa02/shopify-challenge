'use client'
import { useState } from "react";
import FilmSearch from "./components/film-search/FilmSearch";
import NominatedFilms from "./components/nominated-films/NominatedFilms";
import styles from './style/css/style.module.css'

export default function Home() {
  const [nominatedFilmIds, setNominatedFilmIds] = useState(Array<string>)
  return (
    <main className={styles.main}>

      <section className={styles.section + styles["film-search"]}>
        <FilmSearch nominatedFilmIds={nominatedFilmIds} setNominatedFilmIds={setNominatedFilmIds} />
      </section>

      <section className={styles.section}>
        <NominatedFilms nominatedFilmIds={nominatedFilmIds} setNominatedFilmIds={setNominatedFilmIds} />
      </section>

    </main>
  )
}
