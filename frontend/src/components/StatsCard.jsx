const StatsCard = ({ number, label }) => {
  return (
    <div className="stats-card">

      <strong>{number}</strong>

      <span>{label}</span>

    </div>
  );
};

export default StatsCard;