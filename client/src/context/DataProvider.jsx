import { createContext, useState } from "react";
// for using the imported datacontext
// we will also have to export our DataContext
export const DataContext = createContext(null);

// now we will make states
// we are getting children ( header,box,home,etc. from app.js )
const DataProvider =({children})=>{
    const [account,setAccount]=useState('')
    return (
        // there is a Provider attribute inside contsxt
        // we will create states above and export them frm value={}
        <DataContext.Provider value={
            {
                account,
                setAccount
            }
        }>
            {/* we are exporting children */}
            {children}
        </DataContext.Provider>
    );
}
export default DataProvider;
// now as we have to use these states in complete app