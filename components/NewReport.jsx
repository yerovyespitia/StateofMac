import React from "react"
import styles from "../styles/games.module.scss"
export function NewReport({
  handleSubmit,
  addTitle,
  addRunThrough,
  addState,
  addLauncher,
  addMacUsed,
  addDescription,
  cancelSubmit,
}) {
  const runThrough = [
    "A Native Port",
    "Rosetta 2",
    "Crossover",
    "Parallels",
    "VMware",
    "PlayCover",
    "A Console Emulator",
    "Other",
  ]

  const states = ["Perfect", "Playable", "Unplayable"]
  const launchers = [
    "Steam Launcher",
    "Epic Games Launcher",
    "Rockstar Games Launcher",
    "Riot Client",
    "Battle.net",
    "Other",
    "None",
  ]
  const macs = [
    "MacBook Pro M1 2020",
    "MacBook Air M1 2020",
    "Mac mini M1 2020",
    "iMac M1 2021",
    "MacBook Pro M1 Pro 2021",
    "Mac Studio M1 Max 2022",
    "Mac Studio M1 Ultra 2022",
    "MacBook Air M2 2022",
    "MacBook Pro M2 2022",
  ]

  return (
    <form className={styles.addNewReport} onSubmit={handleSubmit}>
      <div className={styles.addNewReportTitle}>
        <input
          type="text"
          name="search"
          placeholder="Title"
          onChange={addTitle}
        />
      </div>
      <div className={styles.addNewReportOptions}>
        <select onChange={addRunThrough}>
          <option disabled selected={true} defaultValue={"Game Run Through"}>
            Game Run Through
          </option>
          {runThrough.map((run) => (
            <option value={run}>{run}</option>
          ))}
        </select>
        <select onChange={addState}>
          <option disabled selected={true} defaultValue={"State of the Game"}>
            State of the Game
          </option>
          {states.map((state) => (
            <option value={state}>{state}</option>
          ))}
        </select>
        <select onChange={addLauncher}>
          <option disabled selected={true} defaultValue={"Launcher"}>
            Launcher
          </option>
          {launchers.map((launcher) => (
            <option value={launcher}>{launcher}</option>
          ))}
        </select>
        <select onChange={addMacUsed}>
          <option disabled selected={true} defaultValue={"Mac"}>
            Mac
          </option>
          {macs.map((mac) => (
            <option value={mac}>{mac}</option>
          ))}
        </select>
      </div>
      <div className={styles.addNewReportDescription}>
        <textarea
          name="description"
          id="textarea"
          cols="30"
          rows="10"
          placeholder="Description"
          onChange={addDescription}
        ></textarea>
      </div>
      <div className={styles.addNewReportOptionButton}>
        <button type="submit">Send</button>
        <button onClick={cancelSubmit}>Cancel</button>
      </div>
    </form>
  )
}
