const GameState = ({ state }) => {
  return (
    <>
      {state === "Unknown" && (
        <p className="mb-4 text-lg font-bold text-[#7e7e7e]">
          Hasn&apos;t been rated
        </p>
      )}
      {state === "Perfect" && (
        <p className="mb-4 text-lg font-bold text-[#78bf58]">
          Runs perfectly with some tweaks
        </p>
      )}
      {state === "Playable" && (
        <p className="mb-4 text-lg font-bold text-[#c98452]">
          Overall a good experience
        </p>
      )}
      {state === "Unplayable" && (
        <p className="mb-4 text-lg font-bold text-[#c95252]">Too many issues</p>
      )}
      {state === "Tied" && (
        <p className="mb-4 text-lg font-bold text-[#bbc952]">Mixed opinions</p>
      )}
    </>
  )
}

export default GameState
