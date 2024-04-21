import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from '../../assets/images/copy.png';
import classes from './Code.module.scss'

const Code = ({props}) => {
    const {children, className, node, ...rest} = props;
    const match = /language-(\w+)/.exec(className || '')
    const handleClick = () => {
      navigator.clipboard.writeText(children);
    }

    return match ? (
      <div className={classes.code}>
        <SyntaxHighlighter
        {...rest}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        language={match[1]}
        style={dark}
      />
      <button className={classes.copy} onClick={handleClick}><img src={copy} alt="copy"/></button>
      </div>

    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    )
}

export default Code;