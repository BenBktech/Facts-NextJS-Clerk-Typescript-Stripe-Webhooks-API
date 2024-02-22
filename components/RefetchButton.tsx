import { Button } from "@/components/ui/button"
import { RefetchProps } from "@/types"

const RefetchButton = ({ refetch }: RefetchProps) => {
  return (
    <Button className="refetch-button" variant="outline" onClick={() => refetch()}>Button</Button>
  )
}

export default RefetchButton