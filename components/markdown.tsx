import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import coy  from "react-syntax-highlighter/dist/cjs/prism";
import { FunctionComponent } from 'react';

interface IProps {
    content: string;
}

interface codeBlockProps {
    value: string;
    language:string;
}

const CodeBlock: FunctionComponent<codeBlockProps> = ({value,language}) => {

    return <SyntaxHighlighter language={language} style={coy}>
    {value}
  </SyntaxHighlighter>
}

const Markdown: FunctionComponent<IProps> = ({content}) => {

    return <div className="markdown-body">
        <ReactMarkdown>
        {content}
        </ReactMarkdown>
    </div>
}

export default Markdown;