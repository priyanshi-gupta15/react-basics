/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Show({item}) {
    const setcolor = () =>{
        
    }
    return(
        <>
        <ul className="">
            {item.map((add)=> ( <li className="bg-slate-50 m-2 flex justify-between shadow-lg rounded-xl p-2" key={add}>{add}
                
                 <button className="bg-slate-400  rounded-xl px-3 py-1 " onClick={setcolor} bought = {true}>buy</button></li>
            
        
        ))}
        
        </ul>
        </>
    );
    
}
export default Show;