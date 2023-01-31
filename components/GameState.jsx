const GameState = (props) => {
  return (
    <>
      {props.game === "Unknown" && (
        <p className="mb-7 text-lg font-bold text-[#7e7e7e]">
          Hasn&apos;t been rated
        </p>
      )}
      {props.game === "Perfect" && (
        <p className="mb-7 text-lg font-bold text-[#78bf58]">
          Runs perfectly, maybe need some tweaks
        </p>
      )}
      {props.game === "Playable" && (
        <p className="mb-7 text-lg font-bold text-[#c98452]">
          Runs with some issues but overall a good experience
        </p>
      )}
      {props.game === "Unplayable" && (
        <p className="mb-7 text-lg font-bold text-[#c95252]">
          Often crashes, it doesn&apos;t start, too many issues
        </p>
      )}
      {props.game === "Tied" && (
        <p className="mb-7 text-lg font-bold text-[#bbc952]">
          There&apos;re mixed opinions about the perfomance
        </p>
      )}
    </>
  )
}

export default GameState
