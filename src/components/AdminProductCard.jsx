import {Card, CardHeader, CardBody, Image, Button, CardFooter, Divider   } from "@nextui-org/react";
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

function AdminProductCard({shoe, handleDelete}) {
  const commaSeparetor = (price) => {
    const options = {  maximumFractionDigits: 2 };
    const result = Intl.NumberFormat("en-US",options).format(price);
    return result;
  }
  return (
    <Card className="py-4 border-1">
      <CardBody className="overflow-visible items-center">
      <Image
        alt="Card background"
        className="object-cover"
        src={shoe?.image_url}
        width={150}
      />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{shoe?.title}</h4>
        <div className="flex items-center justify-between w-full py-2">
          <div className="flex items-center justify-start gap-2">
            <p className="uppercase text-lg font-medium">Tk. {commaSeparetor(shoe?.price)}</p>
            <small className="text-default-500 line-through">Tk.500</small>
          </div>
          <Button isIconOnly radius="full" className="bg-black text-white shadow-lg" aria-label="Like">
            <Link to={`/allProduct/${shoe?.id}`}><CgArrowTopRight size={25}/></Link>
          </Button>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-col gap-2">
      <Divider className="my-4" />
      <div className="flex gap-4 items-center justify-center w-full">   
        <Button onClick={() => handleDelete(shoe)} color="danger" startContent={<AiFillDelete size={20}/>}>
           Delete
        </Button>
        <Button color="success" startContent={<BiSolidEdit size={20}/>}>
         <Link to={`/dashboard/updateProduct/${shoe?.id}`}>Update</Link>
        </Button> 
       </div>
    </CardFooter>
    </Card>
  )
}

export default AdminProductCard
