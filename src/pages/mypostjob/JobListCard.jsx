import React from 'react';
import { Link } from 'react-router';

const JobListCard = ({job,index}) => {
    const {title,company,dedline,_id} =job
    return (
      <tr>
        <td>{index+1}</td>
        <td>{title}</td>
        <td>{company}</td>
        <td>{dedline}</td>
        <td><Link to={`/applications/${_id}`}> view application </Link></td>
      </tr>
    );
};

export default JobListCard;