import Link from 'next/link';

const studentlogin = () => {
    const studentList=["anil", "atul","Ravi","Raj","shyam"];
    
  return (
    <div>
        {
            studentList.map((data, index)=>{
                return(
                    <ul>
                    <li key={index}>
                        <Link href={`/student/${data}`}>{data}</Link>
                    </li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default studentlogin