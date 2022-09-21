import React, { useEffect, useState } from 'react'
import { supplierNetwork } from '../network/requests/supplierNetwork';
import { useForm } from "react-hook-form";

function SupplierTable() {
    const [suppliers, setSuppliers] = useState([]);
    const {register, handleSubmit,reset} = useForm();

    const getSuppliers = () => {
        supplierNetwork.getAllSuppliers()
        .then(data => {
            setSuppliers(data);
        })
    }

    useEffect(() => {
        getSuppliers();
    }, []);

    const addSupplier = async (data) => {
        console.log(data)
        await supplierNetwork.addSupplier(data)
          .then(res => console.log(res));
        getSuppliers();
        reset();
      }

    const deleteSupplier = async (id) => {
       await supplierNetwork.deleteSupplierById(id);

       getSuppliers();
      }

  return (
    <>
    <div style={{display:'flex',justifyContent:'center'}}>
    <form style={{ marginBottom: '30px' }} 
    onSubmit={handleSubmit(addSupplier)}>
        <div>
          <input type='text' placeholder='company name' name='companyName' {...register("companyName")} />
        </div>
        <div>
          <input type='text' placeholder='contact name' name='contactName' {...register("contactName")}/>
        </div>
        <div>
          <input type='text' placeholder='contact title' name='contactTitle' {...register("contactTitle")}/>
        </div>
        <button type='submit'>Save</button>
      </form>
    <table style={{border:'1px solid',padding:'20px 30px'}}>
    <caption>Suppliers</caption>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Delete Supplier</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.sort((a,b)=>a.id-b.id).map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={()=> {
                                deleteSupplier(item.id)
                            } }>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>


    </>
  )
}

export default SupplierTable