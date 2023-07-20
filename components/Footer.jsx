import Image from "next/image";

function Footer() {
  return (
    <div className="foot bg-no-repeat bg-center bg-cover text-white">
       <div className="p-20">
            <h1 className="text-3xl font-bold mb-3">Ready - Set - Create</h1>
            <h3 className="font-semibold mb-5">Talk With Us</h3>
            <div className="flex justify-start gap-5">
                <a href="" className="rounded bg-green-500 hover:bg-teal-400 w-32 h-10 text-sm flex justify-center items-center"><Image className="mr-2" src="/assets/whatsapp.svg" alt="whatsapp" width={20} height={20}/> Whatsapp</a>
                <a href="" className="rounded bg-blue-500 hover:bg-blue-400 w-32 h-10 text-sm flex justify-center items-center"><Image className="mr-2" src="assets/telepon.svg" alt="phone" width={18} height={18}/>Phone</a>
            </div>
       </div>
    </div>
  )
}

export default Footer
