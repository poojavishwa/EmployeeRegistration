import { useEffect ,useState} from "react";
import axios from "axios";
import { POST_URL } from "./utils/constants";


const EmployeeForm = () => {
 
function HandlePost() {
  axios
    .post(POST_URL, {
      id: 701,
      FirstName: "TEST0",
      LastName: "ASAS",
      DOB: "2023-09-17",
      StartDate: "2023-09-18",
      EndDate: "2023-09-20",
      Study: "M.S",
      CurrentSalary: 40000,
      Description: "SZRXDGCFVBHNM",
   })
    .then((response) => {
      console.log(response.data)
    })
    .then((error) => console.log(error));
}


  return (
    <form>
      <div className="mt-[140px] flex flex-col items-center justify-center">
        <h1 className="text-[45px] font-bold leading-[62px] text-[#314363]">
          Employee Registration Form
        </h1>
        <div className="bg-white shadow-bShadow w-[1053px] h-[1624px] rounded-[35px] mt-[46px]">
          <div className="grid grid-cols-8 gap-4 mt-[163px] w-1/2 mx-auto">
            <div className="col-span-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900">
                First Name*
              </label>
              <div className="mt-2">
                <div className="flex px-2 rounded-[16px] bg-[#F8FBFF] h-[54px]  ring-1  ring-gray-300">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="firstname"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900">
                Lastname*
              </label>
              <div className="mt-2">
                <div className="flex px-2 rounded-[16px] bg-[#F8FBFF] h-[54px]  ring-1  ring-gray-300 ">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="lastname"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter your Lastname"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900">
                DOB
              </label>
              <div className="mt-2">
                <div className="px-2 flex rounded-[16px] bg-[#F8FBFF]  h-[54px]  ring-1  ring-gray-300">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    autoComplete="dob"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter your dob"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900">
                Study
              </label>
              <div className="mt-2">
                <div className="px-2 flex rounded-[16px] bg-[#F8FBFF]  h-[54px]  ring-1  ring-gray-300">
                  <select
                    name="study"
                    id="study"
                    autoComplete="study"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter your dob"
                  >
                      <option>BE</option>
                      <option>BCom</option>
                      <option>Bsc</option>
                  </select>
                </div>
              </div>
              </div>
              <div className="col-span-4">
              <label
                htmlFor="startdate"
                className="block text-sm font-medium leading-6 text-gray-900">
                Start Date
              </label>
              <div className="mt-2">
                <div className="flex px-2 rounded-[16px] bg-[#F8FBFF] h-[54px]  ring-1  ring-gray-300 ">
                  <input
                    type="date"
                    name="startdate"
                    id="startdate"
                    autoComplete="startdate"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="enddate"
                className="block text-sm font-medium leading-6 text-gray-900">
                End Date
              </label>
              <div className="mt-2">
                <div className="flex px-2 rounded-[16px] bg-[#F8FBFF] h-[54px]  ring-1  ring-gray-300 ">
                  <input
                    type="date"
                    name="enddate"
                    id="enddate"
                    autoComplete="enddate"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <label
                htmlFor="currentsal"
                className="block text-sm font-medium leading-6 text-gray-900">
                Current Salary
              </label>
              <div className="mt-2">
                <div className="flex px-2 rounded-[16px] bg-[#F8FBFF] h-[54px]  ring-1  ring-gray-300 ">
                  <input
                    type="text"
                    name="currentsal"
                    id="currentsal"
                    autoComplete="currentsal"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="300000"
                 />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div>
              <div className="mt-2 flex items-center px-2 rounded-tl-[16px] rounded-tr-[16px] bg-[#E9F2FF] h-[54px] ">
                  <h1 className="text-[36px] text-[#3C3C3C] font-bold pl-[45px] pr-[61px] ">B</h1>
                  <h1 className="text-[36px] text-[#3C3C3C] font-bold pr-[61px] italic">I</h1>
                  <h1 className="text-[36px] text-[#3C3C3C] font-bold pr-[61px] underline italic">U</h1>
                  <h1 className="text-[36px] text-[#3C3C3C] font-bold pr-[61px]">A</h1>
                  <div className="space-y-1">
                    <div className="bg-gray-500 w-6 h-[1px]"></div>
                    <div className="bg-gray-500 w-6 h-[1px]"></div>
                    <div className="bg-gray-500 w-6 h-[1px]"></div>
                  </div>
                  <div className="pl-[61px]">
                    <div className="flex flex-row items-center"><span className="text-[5px]">1</span><div className="bg-gray-500 w-6 h-[1px]"></div></div>
                    <div className="flex flex-row items-center "><span className="text-[5px]">2</span><div className="bg-gray-500 w-6 h-[1px]"></div></div>
                    <div className="flex flex-row items-center"><span className="text-[5px]">3</span><div className="bg-gray-500 w-6 h-[1px]"></div></div>
                  </div>
                </div>
              <div className="mt-[2px] w-full">
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    autoComplete="description"
                    className="block flex-1 w-full h-[355px] bg-[#E9F2FF] border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                 />
                </div>
              </div>
            </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="text-sm w-[297px] h-[69px] rounded-xl bg-[#E3E3E3]  hover:bg-indigo-100 font-semibold leading-6 text-[#263857]">
              Cancel
            </button>
            <button
              type="submit"
              className="w-[297px] h-[69px] rounded-xl border border-[#142A51] bg-white px-3 py-2 text-sm font-semibold text-[#263857] shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Save
            </button>
          </div>
              </div>
            </div>
    </form>
    
  );
};
export default EmployeeForm;
