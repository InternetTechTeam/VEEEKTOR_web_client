import React, { useState } from "react";
import classes from "./Tabs.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import TabContent from "./TabContent";
import TabList from "./TabList";

const Tabs = ({className, children, position, onFullPage}) => {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={classNames(classes.Tabs, {}, [classes[position]])}>
        <TabList tabs={children} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabContent className={classNames("", {[classes.onFullPage]: onFullPage}, [])}>
            {React.Children.toArray(children)[activeTab].props.content}
        </TabContent>
    </div>
  )
}

export default Tabs;