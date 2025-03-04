export default function BingoBoard() {
  return (
    <div className="right-column">
      <div className="bingo-board">
        {
          Array.from({ length: 75 }).map((_, index) => (
            <div className="bingo-cell-container" key={index}>
              <div className="bingo-cell">
                <p>{index + 1}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
