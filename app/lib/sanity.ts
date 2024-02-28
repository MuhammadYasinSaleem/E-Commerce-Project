import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client=createClient({
    projectId:"ndd6mk3f",
    dataset:"production",
    apiVersion:"v2022-03-07",
    useCdn:true,
});

const builder=imageUrlBuilder(client);

export function urlFor(source:any){
    return builder.image(source);
}
