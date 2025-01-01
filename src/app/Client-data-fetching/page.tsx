 "use client"
 import { Button } from "@/components/ui/button"
 import Footer from "@/component/footer"
 import { FaStar} from 'react-icons/fa';
 import React ,{useState ,useEffect} from "react"
interface Product{
id:number;
title:string;
price:string;
category:string;
discription:string;
image:string;
rating:{
  rate:number;
  count:number;
};
}

const Page = () => {

  const [data, setData] = useState<Product[]>([]);
  const [showMessage, setShowMessage] = useState<{ [key: number]: boolean }>({});

  const handleClick = (id: number) => {
    setShowMessage((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the message state for the specific product
    }));
  };
  useEffect(()=>{
  const fetchData = async()=>{
    const response = await fetch ("https://fakestoreapi.com/products")
    const parsedResponse: Product[]= await response.json();
    console.log(
        "Product>>", parsedResponse);
        setData(parsedResponse)
    }
    fetchData()
  },[]);
  return (
    <div>
<div className="p-4 min-h-screen  flex items-center  justify-center ">
  <div className="grid grid-cols-1  lg:grid-cols-4  sm:grid-cols-2 md:grid-cols-3 gap-4">
    {data.map((product)=>(
      <div  key={product.id} className="border p-4 rounded-lg  shadow-md  bg-white ">
        <img
        src={product.image}
        alt ={product.title}
        className="w-full h-40 object-contain  mb-2"
        />
        <h2 className="text-[2xl] font-semibold">{product.title}</h2>
        <p className="text-gray-500">{product.category}</p>
        <p className="  text-gray-500 font-bold ">price:${product.price}</p>
        <p className="text-sm folnt-bold  text-gray-500">{product.discription}</p>
        <div className="flex items-center mt-2">
          <span className=' font-bold'> {product.rating.rate}
        <FaStar className="text-yellow-400" /> </span>
        <span className='ml-2 text-gray-500 text-sm '>({product.rating.count} reviews)</span>
        </div>
        <Button variant="outline"  onClick={()=>handleClick(product.id)}>Button</Button>
        {showMessage [product.id]&& (
        <div className="mt-4 p-4 border rounded shadow-md bg-green-100">
            <p className="text-gray-700 font-semibold">Hello! This is your message.</p>
          </div>
          
        )}
      </div>
    ))}
  </div>
  </div>
  <Footer />
</div>


  )
}




export default Page