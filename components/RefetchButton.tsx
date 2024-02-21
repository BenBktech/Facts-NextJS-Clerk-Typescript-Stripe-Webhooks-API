import { Button } from "@/components/ui/button"

const RefetchButton = ({ refetch }) => {
  return (
    <Button className="refetch-button" variant="outline" onClick={() => refetch()}>Button</Button>
  )
}

export default RefetchButton