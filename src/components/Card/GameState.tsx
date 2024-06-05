export const GameState = ({ state }: { state: string }) => {
  return (
    <section>
      <p
        className={`mb-4 text-lg font-bold ${
          state === 'Unknown' ? 'text-[#7e7e7e]' : ''
        } ${state === 'Perfect' && 'text-[#78bf58]'} ${
          state === 'Playable' ? 'text-[#c98452]' : ''
        } ${state === 'Unplayable' ? 'text-[#c95252]' : ''}${
          state === 'Tied' ? 'text-[#bbc952]' : ''
        }`}
      >
        {state === 'Unknown' && "Hasn't been rated"}
        {state === 'Perfect' && 'Runs perfectly with some tweaks'}
        {state === 'Playable' && 'Overall a good experience'}
        {state === 'Unplayable' && 'Too many issues'}
        {state === 'Tied' && 'Mixed opinions'}
      </p>
    </section>
  )
}
