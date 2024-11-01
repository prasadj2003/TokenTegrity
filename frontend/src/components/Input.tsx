function Input(props: any) {
    return (
      <div className="w-full max-w-lg min-w-[200px]">
        <div className="relative">
          <input
            type="string"
            className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 mt-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        </div>
      </div>
    );
  }
  
  export default Input;
  