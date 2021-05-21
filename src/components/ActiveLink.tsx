import { useRouter } from "next/router";
import Link, { LinkProps} from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink( { children, shouldMatchExactHref = false, ...rest } : ActiveLinkProps){

    let isActive = false;
    const { asPath } = useRouter()

    if (shouldMatchExactHref) {
        if (asPath === rest.href || asPath == rest.as){
            isActive = true
        }
    } else {
        if ( 
            asPath.startsWith(String(rest.href)) || 
            asPath.startsWith(String(rest.href)) 
            ) {
                isActive = true
        }
    }
   


    return (
        <Link {...rest}> 
            {cloneElement(children, {color: isActive ? 'pink.400' : 'gray.50' })}
        </Link>
    )
}
