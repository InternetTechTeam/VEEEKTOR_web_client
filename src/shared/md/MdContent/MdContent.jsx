import React from 'react'
import classes from "./MdContent.module.scss";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { mdComponents } from '../../../shared/lib/markdownComponents';

const MdContent = ({content}) => {
  return (
    <Markdown className={classes.md} remarkPlugins={[remarkGfm]} components={mdComponents}>{content}</Markdown>
  )
}

export default MdContent;