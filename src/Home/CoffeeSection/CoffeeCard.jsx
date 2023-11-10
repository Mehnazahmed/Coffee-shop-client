import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({item ,refetch}) => {

  const { coffeename, chef, supplier, taste, category, details, photoUrl } =
    item;

    const handleUpdate =item=>{

    }

    const handleDelete =item=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/coffee/${item._id}`)
          .then(res=>{
            console.log("deleted res", res.data);
            const data =res.data;
           if(data.deletedCount>0){
            refetch();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
           }
          })
          
        }
      })
    }
  return (
    <div className="card card-side shadow-xl ">
      <figure>
        <img className="h-[230px] w-[185]" src={photoUrl} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-6">
      <div className="card-body">
        <h2 className="card-title">Name: {coffeename}</h2>
        <h2 className="">Chef: {chef}</h2>
        <h2 className="">Category: {category}</h2>
      </div>
      <div className="card-actions justify-end">
        <div className="btn-group btn-group-vertical space-y-4">
          <Link to={`/viewitem/${item._id}`}><button className="btn ">view</button></Link>
          <Link to={`/updateitem/${item._id}`}><button className="btn">Edit</button></Link>
          
          <button onClick={()=>handleDelete(item)} className="btn">X</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
