import LabItem from "./LabItem";
import TestItem from "./TestItem";
import InfoItem from "./InfoItem";

const NestedItem = ({item, type}) => {
     if (type === "lab") return <LabItem item={item}/>
     if (type === "test") return <TestItem item={item}/>

     return <InfoItem item={item}/>
}

export default NestedItem;