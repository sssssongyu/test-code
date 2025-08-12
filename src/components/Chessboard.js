import "./Chessboard.css";

// Converts a 0-based index into a letter
// E.g.
// 0 = "a", 1 = "b", 2 = "c", etc.
const indexToLetter = (index) => {
  return String.fromCharCode(index + 97);
};

const Chessboard = () => {
  const size = 8
  const line = Array(size).fill(1)
  const column = Array(size).fill(1)
  const string = ['a', 'b', 'c', 'd', 'e', 'f', 'g', '']

  const returnClassName = (columnI, LineI) => {
    let res = ''
    if ((columnI + LineI) % 2 === 1) {
      res = 'greenblock'
    } else {
      res = 'yellowblock'
    }
    if ((columnI === 0 && LineI === 0) || (columnI === size-1 && LineI === size-1)) {
      res += ' redborder'
    }
    return res
  }
  return (
    <div>
      <div>
        TODO: Build the chessboard in React + CSS here Build the chessboard in
        React + CSS here Build the chessboard in React + CSS here
      </div>
      <div>
        {line.map((d, lineIndex) => (
          <div key={lineIndex + 'line'} className="line">
            {column.map((c, columnIndex) => (
              <div key={columnIndex + 'column'} className={returnClassName(columnIndex, lineIndex)}>
                {columnIndex === 0 && lineIndex !== 0 && <div className='numberPosition'>{size - lineIndex}</div>}
                {lineIndex === size-1 && <div className='stringPosition'>{string[columnIndex]}</div>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chessboard;
