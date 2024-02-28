"use client"
import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow(
    {currency,
        description,
        image,
        name,
        price,
    price_id}
        :ProductCart){
   const {checkoutSingleItem}=useShoppingCart();
   function buyNow(priceid:string){
    checkoutSingleItem(priceid);
   }
   const product={
    name:name,
    description:description,
    price:price,
    currency:currency,
    image:urlFor(image).url(),
    price_id:price_id
   }
    return(
<Button
onClick={()=>{
    buyNow(product.price_id);
}}
>Add To Cart</Button>
    )
}