import {LoaderCircle} from "lucide-react";

export const Spinner = () =>{
    return(
        <>
        <center><div><LoaderCircle className="animate-spin h-40 w-10 mr-3 text-slate-300" viewBox="0 0 24 24"></LoaderCircle></div></center>
        </>

    );
}