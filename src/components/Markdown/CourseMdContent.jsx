import React from 'react'
import classes from "./mdStyle.module.scss";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { mdComponents } from '../../markdown';

const CourseMdContent = ({content}) => {
  return (
    <Markdown className={classes.md} remarkPlugins={[remarkGfm]} components={mdComponents}>{content}</Markdown>
  )
}

export default CourseMdContent;