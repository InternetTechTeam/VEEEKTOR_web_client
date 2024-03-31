import Code from "../components/Markdown/Code";
import Header1 from "../components/Markdown/Header1";
import Img from "../components/Markdown/Img";
import Paragpaph from "../components/Markdown/Paragpaph";

export const mdComponents = {
    code: (props) => <Code props={props}/>,
    img: (props) => <Img props={props}/>,
    h1: (props) => <Header1 props={props}/>,
    p: (props) => <Paragpaph props={props}/>
}
