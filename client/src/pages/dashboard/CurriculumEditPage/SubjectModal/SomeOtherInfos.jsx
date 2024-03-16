import { useEffect, useState } from 'react'
import { useSubjectContext } from "../../../../context";
import { useParams } from "react-router-dom";
import { Loading, SubjectMultiInput } from '../../../../components';

export default function SomeOtherInfos() {
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
    return <Loading count={3} cardClassName="!h-12" />
  }
  return (
    <>
      {
        data &&
        Object.keys(data).map((propertyName)=>{
          if(["common_id", "id", "_id", "version", "title", "modules", "experiments", "referenceMaterial"].includes(propertyName)) return null;
          return (
            <div className="flex justify-evenly" key={propertyName}>
              <SubjectMultiInput name={propertyName} />
            </div>
          )
        })
      }
    </>
  )
}
