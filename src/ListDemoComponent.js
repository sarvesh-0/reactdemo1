import React from 'react';

export const ListDemoComponent = ()=>{
    const numlist = [1,2,3,4,5]

    let listitems = numlist.map((num)=><li>{num}</li>)
    return(
        <>
            <div>
                <ul>{listitems}</ul>
            </div>
        </>
    )
}
