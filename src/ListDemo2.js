import React from 'react'
export const ListDemo2 = ()=>{
    let customers=[
        {Id:"A1",Name:"Emma Stone"},
        {Id:"A2",Name:"Andrew Garfil"},
        {Id:"A3",Name:"Kate Teens"},
        {Id:"A4",Name:"Jonathan Majors"},
        {Id:"A5",Name:"Percy Lovan"}
    ]

    let custlist = customers.map((customer)=>(<tr><td key={customer.Id}>{customer.Id}</td><td>{customer.Name}</td></tr>))
    return(
        <>
        <div>
            <table border={1} cellPadding={10} cellSpacing={10} width={800} align='center'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {custlist}
            </table>
        </div>
        </>
    )
}