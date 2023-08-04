import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {
  // Calculate average rating
  let averageRating =
    (
      feedback.reduce((acc, curr) => {
        return acc + curr.rating;
      }, 0) / feedback.length
    ).toFixed(1) || 0;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeedbackStats;
