import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Job from "./job";

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 10300
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 23000
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 300
    },
  ]);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };

  return (
    
    <div className="dark-mode">
      <button onClick={toggleMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      <table className={`table ${isDarkMode ? 'table-dark' : 'table-light'}`}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col"> <FormattedMessage id="Position"/></th>
            <th scope="col"> <FormattedMessage id="Company"/></th>
            <th scope="col"> <FormattedMessage id="Salary"/></th>
            <th scope="col"> <FormattedMessage id="City"/></th>
            <th scope="col"> <FormattedMessage id="Publication date"/></th>
            <th scope="col"> <FormattedMessage id="Views"/></th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
