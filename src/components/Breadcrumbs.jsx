import React from "react"
import { Link } from "react-router-dom"

const Breadcrumbs = () => {

    const pathnames = ["First-level Menu", "Second-level Menu", "Current Page"]

  return (
    <div className="text-black.45 my-4">
         {pathnames.map((path, index) => (
        <React.Fragment key={index}>
        <Link to={null}>
            <span className={`font-roboto font-normal text-base leading-6` && index+1 !== pathnames.length ? `text-black.45` : `text-black.85`}>{path}</span>
          {index+1 !== pathnames.length && <span>{" "}{"/"}{" "}</span>}
          </Link>
       
     
        </React.Fragment>
      ))}
    </div>
  )
}

export default Breadcrumbs
