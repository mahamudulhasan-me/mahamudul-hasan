const PersonalInfoLayout = ({ children }) => {
  return (
    <section className="flex w-full h-full">
      <nav className="w-[30%] h-full border-r border-p4">
        <p>Professional info</p>
      </nav>
      <aside className="w-[70%] h-full">{children}</aside>
    </section>
  );
};

export default PersonalInfoLayout;
