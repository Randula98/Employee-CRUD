import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
import "./dash.css"

import {
  AllEmp,
  filter
} from '../../asserts'

import { RecordAllEmp } from "../../components";


export default function Dash() {
  const [branch_name, setBranch_name] = useState("");
  const [bank_name, setBank_name] = useState("");
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/employee`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();

    return;
  }, [records.length]);

  function recordList() {
    return records.map((record) => {
      return (
        <RecordAllEmp
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  async function deleteRecord(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ',
        cancelButton: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this! You will the Delete the This Employee Profile!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/employee/delete/${id}`, {
          method: "DELETE"
        });

        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);

        swalWithBootstrapButtons.fire(
          'Deleted!',
          'This Employee Profile has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'This Employee Profile is Not Deleted:)',
          'info'
        )
      }
    })
  }

  function filerEmp(e) {
    ;
    const isSelected = branch_name === "none" || bank_name === "none" || branch_name === "" || bank_name === ""

    if (isSelected) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Selecr Branch & Bank Name",
      })
    }
    else {
      console.log("Search Function");
      navigate(`/filter/${bank_name}/${branch_name}`);
    }
  }

  return (
    <>
      <div className="DashContainer">
        <div className="innerContainer rounded">
          <div className="p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-400 dark:text-blue-900" role="alert">
            <span className="font-medium">{AllEmp}</span>
          </div>

          <div className="filterBar rounded">
            <div className="selection">
            </div>

            <div class="flex flex-col md:flex-row  border-gray-200 pb-4 mb-4">
              <div class="my-2 p-1 flex rounded w-300">
                <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-100">{filter}</h4>
              </div>
              <div class="flex-1 flex flex-col md:flex-row">
                <div class="w-full flex-1 mx-2">
                  <div class="my-2 p-1 bg-white flex rounded w-300">
                    <select id="countries" class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => { setBank_name(e.target.value) }}>
                      <option selected>Select a Bank</option>
                      <option value="Commercial Bank">Commercial Bank</option>
                      <option value="People's Bank">People's Bank</option>
                      <option value="Bank of Ceylon">Bank of Ceylon</option>
                      <option value="Sampath Bank">Sampath Bank</option>
                      <option value="Nations Trust">Nations Trust</option>
                    </select>
                  </div>
                </div>
                <div class="w-full flex-1 mx-2">
                  <div class="my-2 p-1 bg-white flex w-full rounded">
                    <select id="countries" class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => { setBranch_name(e.target.value) }} >
                      <option selected>Select a Branch</option>
                      <option value="Kandy">Kandy</option>
                      <option value="Colombo">Colombo</option>
                      <option value="Kegalle">Kegalle</option>
                      <option value="Galle">Galle</option>
                      <option value="Malabe">Malabe</option>
                    </select>
                  </div>
                </div>
                <div class="w-full flex-1 mx-2">
                  <div class="my-2 p-1 flex rounded">
                    <button
                      onClick={filerEmp}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="emplist">
            {recordList()}
          </div>
        </div>

      </div>
    </>
  )
}