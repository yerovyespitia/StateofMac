import Select from "./Select"
import { macs, runThrough, launchers, states } from "../data/data"

const NewReport = ({
  handleSubmit,
  addTitle,
  addRunThrough,
  addState,
  addLauncher,
  addMacUsed,
  addDescription,
  cancelSubmit,
}) => {
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
        <Select
          onChange={addRunThrough}
          title={"Game Run Through"}
          options={runThrough}
        />
        <Select
          onChange={addState}
          title={"State of the Game"}
          options={states}
        />
        <Select onChange={addLauncher} title={"Launcher"} options={launchers} />
        <Select onChange={addMacUsed} title={"Mac"} options={macs} />
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

export default NewReport
