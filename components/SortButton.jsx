import React, { useState } from "react"
import styles from "../styles/cards.module.scss"

const SortButton = () => {
  const [showOptions, setShowOptions] = useState(false)
  const [selected, setSelected] = useState("All Games")
  const options = ["All Games"]

  // Sort Game Cards
  const handleSortButton = () => {
    setShowOptions(!showOptions)
  }

  // Set Sort Option
  const sortOption = (option) => {
    setSelected(option)
    setShowOptions(!showOptions)
  }

  return (
    <div className={styles.cardsSortButton}>
      {/* Button */}
      <button onClick={handleSortButton}>
        {selected}
        <svg
          className={styles.expand}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 21l-12-18h24z" />
        </svg>
      </button>
      {/* Button options */}
      {showOptions && (
        <>
          {options.map((option, i) => (
            <button
              key={i}
              onClick={() => {
                sortOption(option)
              }}
            >
              {option}
            </button>
          ))}
        </>
      )}
    </div>
  )
}

export default SortButton
