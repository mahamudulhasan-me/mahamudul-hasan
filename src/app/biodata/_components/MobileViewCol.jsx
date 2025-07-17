const MobileViewRow = ({ label, value }) => {
  return (
    <h6
      className={`flex flex-col md:flex-row items-start   md:divide-x divide-y divide-navy-lightest justify-center`}
    >
      <span className="bio-label2">{label}</span>
      <span className="bio-value2">{value}</span>
    </h6>
  );
};

export default MobileViewRow;
