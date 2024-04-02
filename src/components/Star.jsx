export default function Stars({ onRate, full }) {
  return (
    <span role="button" onClick={onRate}>
      {full ? (
        <img src="../../assets/icons/yellow-star.svg" alt="star" />
      ) : (
        <img src="../../assets/icons/white-star.svg" alt="empty star" />
      )}
    </span>
  );
}
