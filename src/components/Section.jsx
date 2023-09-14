const Section = ({ title, styleTitle, children }) => {
  return (
    <div className="mt-6">
      <h2 className={styleTitle}>{title}</h2>
      <p className="text-xl mt-5 p-5 italic   ">{children}</p>
    </div>
  );
};

export default Section;
