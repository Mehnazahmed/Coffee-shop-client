import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionButton from '../../Components/SectionButton';
import SectionTitle from '../../Components/SectionTitle';

const UpdateCoffeeItem = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();

      const item = useLoaderData();
      console.log(item)

      const onSubmit =data=>{
        const {coffeename,chef,supplier,taste,category,details,photoUrl} =data;
        const updateItem ={coffeename,chef,supplier,taste,category,details,photoUrl}
        axios.patch(`http://localhost:5000/coffee/${item._id}`,updateItem)
        .then(data=>{
          console.log('updated item',data.data)
          if(data.data.modifiedCount>0){
            reset();
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'successfully updated!!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      
        
      }
    return (
        <div>
        <div className="bg-[#F4F3F0] p-24 m-28">
      <SectionTitle heading='Update Existing Coffee Details'></SectionTitle>
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
     <SectionButton type='submit'>{'Update Coffee Details'}</SectionButton>
     </div>
    </form>
    </div>
    </div>
    );
};

export default UpdateCoffeeItem;