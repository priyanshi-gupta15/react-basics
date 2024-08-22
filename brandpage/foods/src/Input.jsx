// eslint-disable-next-line react/prop-types
function Input({keydown}){
    return(
        <>
         <input className="rounded-md mx-16 border-slate-700 text-center shadow-inner border-2 h-12 w-52 mt-2" type="text" placeholder="enter more food" 
            onKeyDown={keydown}/>
        </>
    );

}
export default Input;