import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"  

const Facts = ({ allFacts }: AllFactsProps) => {

    return (
        <div className="facts-container">
            {allFacts.map((fact) => {
                return (
                    <Card className="fact" key={fact.fact}>
                        <CardHeader>
                            Image
                        </CardHeader>
                        <CardContent>
                            <p>{fact.fact}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default Facts