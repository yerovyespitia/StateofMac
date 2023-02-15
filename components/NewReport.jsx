import React from "react"
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
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="text-lg text-white">
        <input
          className="h-14 w-full rounded-lg bg-[#292929] pt-1 pr-0 pb-0 pl-4 focus:outline-none"
          type="text"
          name="search"
          placeholder="Title"
          onChange={addTitle}
        />
      </div>
      <div className="mt-5 flex flex-col items-center justify-center md:flex-row">
        <select
          onChange={addRunThrough}
          className="m-0 mb-3 h-14 w-full rounded-lg bg-[#292929] text-center text-lg font-medium text-white focus:outline-0"
        >
          <option disabled selected={true} defaultValue={"Game Run Through"}>
            Game Run Through
          </option>
          {runThrough.map((run) => (
            <option value={run}>{run}</option>
          ))}
        </select>
        <select
          onChange={addState}
          className="m-0 mb-3 h-14 w-full rounded-lg bg-[#292929] text-center text-lg font-medium text-white focus:outline-0"
        >
          <option disabled selected={true} defaultValue={"State of the Game"}>
            State of the Game
          </option>
          {states.map((state) => (
            <option value={state}>{state}</option>
          ))}
        </select>
        <select
          onChange={addLauncher}
          className="m-0 mb-3 h-14 w-full rounded-lg bg-[#292929] text-center text-lg font-medium text-white focus:outline-0"
        >
          <option disabled selected={true} defaultValue={"Launcher"}>
            Launcher
          </option>
          {launchers.map((launcher) => (
            <option value={launcher}>{launcher}</option>
          ))}
        </select>
        <select
          onChange={addMacUsed}
          className="m-0 mb-3 h-14 w-full rounded-lg bg-[#292929] text-center text-lg font-medium text-white focus:outline-0"
        >
          <option disabled selected={true} defaultValue={"Mac"}>
            Mac
          </option>
          {macs.map((mac) => (
            <option value={mac}>{mac}</option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <textarea
          className="w-full rounded-lg bg-[#292929] pt-5 pl-5 pb-0 pr-5 text-lg text-white focus:outline-none"
          name="description"
          id="textarea"
          cols="30"
          rows="10"
          placeholder="Description"
          onChange={addDescription}
        ></textarea>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center md:flex-row">
        <button
          type="submit"
          className="mb-3 h-14 w-full cursor-pointer rounded-lg bg-[#292929] text-lg font-bold text-[#dbdbdb] md:mr-2 md:w-1/2"
        >
          Send
        </button>
        <button
          className="mb-3 h-14 w-full cursor-pointer rounded-lg bg-[#292929] text-lg font-bold text-[#dbdbdb] md:ml-2 md:w-1/2"
          onClick={cancelSubmit}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
