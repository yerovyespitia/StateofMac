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
          <option value="A Native Port">A Native Port</option>
          <option value="Rosetta 2">Rosetta 2</option>
          <option value="Crossover">Crossover</option>
          <option value="Parallels">Parallels</option>
          <option value="VMware">VMware</option>
          <option value="PlayCover">PlayCover</option>
          <option value="A Console Emulator">A Console Emulator</option>
          <option value="Other">Other</option>
        </select>
        <select onChange={addState}>
          <option disabled selected={true} defaultValue={"State of the Game"}>
            State of the Game
          </option>
          <option value="Perfect">Perfect</option>
          <option value="Playable">Playable</option>
          <option value="Unplayable">Unplayable</option>
        </select>
        <select onChange={addLauncher}>
          <option disabled selected={true} defaultValue={"Launcher"}>
            Launcher
          </option>
          <option value="Steam Launcher">Steam Launcher</option>
          <option value="Epic Games Launcher">Epic Games Launcher</option>
          <option value="Rockstar Games Launcher">
            Rockstar Games Launcher
          </option>
          <option value="Riot Client">Riot Client</option>
          <option value="Battle.net">Battle.net</option>
          <option value="Other">Other</option>
          <option value="None">None</option>
        </select>
        <select onChange={addMacUsed}>
          <option disabled selected={true} defaultValue={"Mac"}>
            Mac
          </option>
          <option value="MacBook Pro M1 2020">MacBook Pro M1 2020</option>
          <option value="MacBook Air M1 2020">MacBook Air M1 2020</option>
          <option value="Mac mini M1 2020">Mac mini M1 2020</option>
          <option value="iMac M1 2021">iMac M1 2021</option>
          <option value="MacBook Pro M1 Pro 2021">
            MacBook Pro M1 Pro 2021
          </option>
          <option value="MacBook Pro M1 Max 2021">
            MacBook Max M1 Pro 2021
          </option>
          <option value="MacBook Pro M1 Max 2021">
            Mac Studio M1 Max 2022
          </option>
          <option value="MacBook Pro M1 Max 2021">
            Mac Studio M1 Ultra 2022
          </option>
          <option value="MacBook Air M2 2022">MacBook Air M2 2022</option>
          <option value="MacBook Pro M2 2022">MacBook Pro M2 2022</option>
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
