"use client"

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button";


const ProcessingButton = ({ processing, process }: { processing: string, process: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="disabled:bg-transparent disabled:bg-blue-400  disabled:cursor-not-allowed">
      {pending ? processing+"..." : process}
    </Button>
  )
}

export default ProcessingButton