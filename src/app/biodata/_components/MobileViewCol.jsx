const MobileViewRow = ({ label, value, bg }) => {
  return (
    <h6
      className={`${bg} flex flex-col md:flex-row items-start   md:divide-x md:divide-y-0 divide-y divide-x-0 divide-navy-lightest justify-center`}
    >
      <span className="bio-label2">{label}</span>
      <span className="bio-value2">{value}</span>
    </h6>
  );
};

export default MobileViewRow;
