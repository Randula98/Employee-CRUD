/* eslint-disable jsx-a11y/anchor-is-valid */
const RecordAllEmp = (props) => (
    <div
        className="max-w-sm bg-white rounded-lg w-80 border border-gray-200 shadow-md dark:bg-gray-400 dark:border-gray-400 cuscardlist empcard">
        <div className="imgView">
            <a href="#">
                <img className="rounded-t-lg h-64 w-64 pt-px" src={props.record.emp_photo} alt="" />
            </a>
        </div>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-gray-700">
                    {props.record.emp_name}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-700">
                Email : {props.record.emp_email}<br />
                Address : {props.record.emp_address}<br />
                Bank name : {props.record.bank_name}<br />
                Branch Name : {props.record.branch_name}<br />
            </p>
            <button onClick={() => {
                props.deleteRecord(props.record._id);
            }}
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Delete
            </button>
        </div>
    </div>
);

export {RecordAllEmp};