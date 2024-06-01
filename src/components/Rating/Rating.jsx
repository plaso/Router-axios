const Rating = ({ children }) => {
  const fillChar = '★';
  const emptyChar = '☆';

  const ratingGrade = Math.round(children);

  const ratingStringResult = new Array(5).fill(emptyChar)
    .map((string, i) => {
      if (i < ratingGrade) {
        return fillChar;
      }
      return string;
    });

  return (
    <p className="text-danger">{ratingStringResult}</p>
  )
}

export default Rating