import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import '../../App.css';
import SectionButton from '../../Components/SectionButton';
import SectionTitle from '../../Components/SectionTitle';
// const imgHostKey=import.meta.env.VITE_imageKey;
const AddACoffee = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
    //    const imageHostUrl =`https://api.imgbb.com/1/upload?key=${imgHostKey}`
      const onSubmit =data=>{

        const {coffeename,chef,supplier,taste,category,details,photoUrl} =data;
        const newCoffee = {coffeename,chef,supplier,taste,category,details,photoUrl}
        console.log(newCoffee);
        axios.post('http://localhost:5000/coffee',newCoffee)
        .then(data=>{
            console.log('new coffee',data.data)
            if(data.data.insertedId){
                reset();
                Swal.fire(`${coffeename} added Successfully` )
            }
        });
        
        

      }
  return (
    <div>
        <div className="bg-[#F4F3F0] p-24 m-28">
      <SectionTitle heading='Add A Coffee'></SectionTitle>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="md:flex ">
        <div className="form-control md:w-1/2 me-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Coffee Name"
            className="input input-bordered w-full "
            {...register("coffeename", { required: true })}
          />
        </div>
        <div className="form-control md:w-1/2 ">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input
            type="text"
            placeholder="Enter Coffee Chef"
            className="input input-bordered w-full "
            {...register("chef", { required: true })}
          />
        </div>
      </div>
      <div className="md:flex  ">
        <div className="form-control md:w-1/2 me-4">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input
            type="text"
            placeholder="Enter Coffee Supplier"
            className="input input-bordered w-full "
            {...register("supplier", { required: true })}
          />
        </div>
        <div className="form-control md:w-1/2 ">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input
            type="text"
            placeholder="Enter Coffee Taste"
            className="input input-bordered w-full "
            {...register("taste", { required: true })}
          />
        </div>
      </div>
      <div className="md:flex  ">
        <div className="form-control md:w-1/2 me-4 ">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="Enter Coffee Category"
            className="input input-bordered w-full "
            {...register("category", { required: true })}
          />
        </div>
        <div className="form-control  md:w-1/2 ">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input
            type="text"
            placeholder="Enter Coffee details"
            className="input input-bordered w-full "
            {...register("details", { required: true })}
          />
        </div>
      </div>
      <div className="form-control  md:w-full ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            placeholder="Enter Photo URL"
            className="input input-bordered w-full "
            {...register("photoUrl", { required: true })}
          />
        </div>

     <div >
     <SectionButton type='submit'>{'Add Coffee'}</SectionButton>
     </div>
    </form>
    </div>
    </div>
  );
};

export default AddACoffee;
