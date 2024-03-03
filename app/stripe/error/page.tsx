import { Button } from "@/components/ui/button";
import { Ban } from "lucide-react";
import Link from "next/link";


export default function stripeError(){
    return(
<div className="h-screen">
<div className="mt-32 md:max-w-[50vw] mx-auto">
<Ban className="text-red-600 w-16 h-16 nx-auto ny-6"/>
<div className="text-center">
<h3 className="md:text-2xl text-base text-red-900 font-semibold text-center">
    Payment Failed!
</h3>
<Button asChild  className="mt-5">
    <Link href="/">Go back</Link>
</Button>
</div>
</div>
</div>
    )
}