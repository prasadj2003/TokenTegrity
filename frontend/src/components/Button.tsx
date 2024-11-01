function Button(props: any) {
    return (
      <button
        type="button"
        onClick={props.onClick} 
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-xl rounded-xl text-sm px-5 py-2.5 mt-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Validate
      </button>
    );
  }
  
  export default Button;
  