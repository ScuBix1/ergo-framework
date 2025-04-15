const Select = (props) => {
  const { className, tabStudents } = props;
  console.log(tabStudents);

  return (
    <select className={className}>
      {tabStudents.map((student, index) => (
        <option key={index}>{student.firstname}</option>
      ))}
    </select>
  );
};

export default Select;
