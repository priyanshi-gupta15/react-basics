// eslint-disable-next-line react/prop-types
function Input({handleOnChange , calval})
{
    return(
        <>
            <input className="rounded border-slate-700  border-2 h-10 w-full" type="text" placeholder="type"
            onChange={handleOnChange} readOnly value={calval}/>
            {/* functionality of input in written by handle event and chnage state bty usestate */}
            
        </>
    );
}
export default Input