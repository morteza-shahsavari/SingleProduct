import { NavLink, useLocation } from "react-router-dom";

export default function QueryNavLink ({to , ...props})
{
let location = useLocation();
console.log("***********")
console.log(location)
console.log("+++++++++++")


return <NavLink to = {to + location.search} {...props}/>
}