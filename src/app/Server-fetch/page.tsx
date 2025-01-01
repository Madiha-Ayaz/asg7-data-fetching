import React from 'react'
import Footer from "@/component/footer"

interface Book {
    name:string;
    type:string;
    avaliable?:string;
}







const page =async () => {
  
        const response = await fetch ("https://simple-books-api.glitch.me/books/")
        const parsedResponse: Book[]= await response.json();
        console.log( "Product>>", parsedResponse);
       
       
        
  return (
    <div>
        <div className="p-4 min-h-screen  flex items-center  justify-center ">
        <div className="grid grid-cols-1  lg:grid-cols-4  sm:grid-cols-2 md:grid-cols-3 gap-4">
        {parsedResponse .map((book)=>(
            <div 
            key={book.avaliable}
            className='border p-4 rounded-lg  shadow-md  bg-white hover:shadow-3xl transition-all'>
                <p className='text-md  font-bold text-3xl text-black '>{book.name}</p>
                <p className='text-sm text-gray-700'>{book.type}</p>
                <p className='text-sm text-gray-700'>{book.avaliable}</p>
            </div>
       ) )}

        
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default page