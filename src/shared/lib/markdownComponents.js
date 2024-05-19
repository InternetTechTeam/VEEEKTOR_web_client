import Code from "../md/Code/Code";
import MdLink from "shared/md/MdLink/MdLink";

export const mdComponents = {
    code: (props) => <Code props={props}/>,
    a: (props) => <MdLink props={props}/>
}
