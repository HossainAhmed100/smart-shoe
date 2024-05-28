import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductCard({shoe}) {
  return (
    <Card className="py-4 border-1">
      <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={shoe?.image_url}
        width={270}
      />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{shoe?.title}</h4>
        <div className="flex items-center justify-between w-full py-2">
          <div className="flex items-center justify-start gap-2">
            <p className="uppercase text-lg font-medium">Tk. {shoe?.price}</p>
            <small className="text-default-500">50% off</small>
          </div>
          <Button isIconOnly radius="full" className="bg-black text-white shadow-lg" aria-label="Like">
            <MdOutlineShoppingCart size={20}/>
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default ProductCard
