import * as React from "react";
import styles from "./<%= componentName %>.module.scss";
import I<%= componentName %>Props from "./I<%= componentName%>Props";
import I<%= componentName %>State from "./I<%= componentName%>State";

export default class <%= componentName %> extends React.Component<I<%= componentName %>Props, I<%= componentName%>State>{
    constructor(props){
        super(props);
    }

    public componentDidMount(){

    }

    public render(){
        return (
            <div className={styles.<%= componentName %>}></div>
        );
    }
}