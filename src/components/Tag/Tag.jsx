const Tag = ({ tags }) => {
  return (
    <div className="flex items-center flex-wrap gap-x-3 gap-y-2">
      {tags?.map((tag) => (
        <span
          key={tag}
          className=" rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium  text-teal-300 "
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;
