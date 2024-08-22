
// eslint-disable-next-line react/prop-types
function Butoon({btn ,val})
{
    return(
        <>
        <button className="bg-slate-300  py-3 min-w-10 m-1 hover:bg-slate-500" onClick={ () => val(btn)} key={btn}>{btn} </button>
        </>
    );
}
export default Butoon
