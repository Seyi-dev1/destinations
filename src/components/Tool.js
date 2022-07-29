import Card from "./Card";
import data from "./data";
const Tool = ()=>{
    return(
       data.map((obj)=>{
        return(
            <Card
            stuff= {obj}>
            </Card>
        )
       })
    )
}
export default Tool