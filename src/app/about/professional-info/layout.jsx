const ProfessionalInfoLayout = ({ children }) => {
  return (
    <section className="flex h-full">
      <nav className="w-2/4  h-full border-r border-p4">
        <p>Professional info</p>
      </nav>
      <aside>{children}</aside>
    </section>
  );
};

export default ProfessionalInfoLayout;
