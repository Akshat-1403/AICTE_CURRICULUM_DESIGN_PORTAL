import { useEffect, useState } from 'react'
import { useSubjectContext } from "../../../../context";
import { useParams } from "react-router-dom";
import { Loading, SubjectMultiInput } from '../../../../components';

export default function SubjectSyllabus() {
  const { getSubject, subject } = useSubjectContext();
  const { subject_common_id } = useParams();

  const [data, setData] = useState();
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(()=>{
    if(!subject || subject.common_id !== subject_common_id) {
      getSubject(subject_common_id)
        .then(res=>{
          if(!res || !res.data) 
          setData(res?.data)
        })
        .finally(()=>{
          setLocalLoading(false);
        })
      }
      else {
        setData(subject);
        setLocalLoading(false);
      }
    // eslint-disable-next-line
  }, [subject]);

  if(localLoading) {
    return <Loading count={6} cardClassName="!h-12" />
  }
  return (
    <div>
      {
        data &&
        Object.keys(data).map((propertyName)=>{
          if(propertyName !== "modules") return null;
          return (
            <div className="flex flex-col items-center justify-center" key={propertyName}>
              <h2 className='font-semibold text-lg mt-2'>Modules</h2>
              <SubjectMultiInput name={propertyName} showName={false}/>
            </div>
          )
        })
      }
    </div>
  )
}
