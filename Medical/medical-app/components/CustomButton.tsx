import { DotSquareIcon, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CustomButton() {
  return (
    <Button className="bg-blue-700">
      <DotSquareIcon className="mr-2 h-4 w-4 "/><Link href="#">List your practice</Link>
    </Button>
  )
}
