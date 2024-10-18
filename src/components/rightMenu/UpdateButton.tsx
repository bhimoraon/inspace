"use client"

import {useFormStatus} from "react-dom"
import { Button } from "../ui/button";


const UpdateButton = () => {
    const {pending} = useFormStatus();
  return (
  <Button disabled={pending} className="disabled:bg-transparent disabled:cursor-not-allowed">
    {pending?"Updating...":"Update"}
  </Button>
)
}

export default UpdateButton