import React, { use } from 'react';

const ApplicationList = ({applicationPromies}) => {
    const appliction = use(applicationPromies)
    console.log(appliction)
    return (
        <div>
            <h1>ApplicationList:{appliction.length}</h1>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default ApplicationList;