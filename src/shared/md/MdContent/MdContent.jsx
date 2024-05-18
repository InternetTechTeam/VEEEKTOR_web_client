import React, { useMemo } from 'react'
import classes from "./MdContent.module.scss";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { mdComponents } from '../../../shared/lib/markdownComponents';

const MdContent = ({content}) => {

  const transformContent = useMemo(() => {
    return content?.split("\n").join("  \n");
  })

  return (
    <Markdown className={classes.md} remarkPlugins={[remarkGfm]} components={mdComponents}>{transformContent}</Markdown>
  )
}

export default MdContent;