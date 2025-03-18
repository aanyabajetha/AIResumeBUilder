import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditResume(){

    const params=useParams();
    const [resumeInfo,setResumeInfo]=useState();

    useEffect(()=>{
        setResumeInfo(dummy);
    },[])
    
    return (
        <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
        <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
            {/*Form section*/}

            <FormSection/>

            {/*Preview section*/}

            <ResumePreview/>

        </div>
        </ResumeInfoContext.Provider>
    )
}

export default EditResume