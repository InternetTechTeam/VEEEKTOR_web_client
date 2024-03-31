import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({props}) => {
    const {children, className, node, ...rest} = props;
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        language={match[1]}
        style={dark}
      />
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    )
}

export default Code;