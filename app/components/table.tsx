import { useSelector } from "react-redux"

export default function Table(){

    const {dataR} = useSelector(state => state.formState)

    return(
        <>
        <div className="px-10 mt-5">
                <table>
  <thead>
    <tr>
      <th>Type</th>
      <th >Name</th>
      <th>Project</th>
      <th>Date</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{dataR && dataR.type}</td>
      <td>{dataR && dataR.name}</td>
      <td>{dataR && dataR.project}</td>
      <td>{dataR && dataR.date}</td>
      <td>Edit & Delete</td>
    </tr>
   

  </tbody>
</table>
</div>
        </>
    )
}