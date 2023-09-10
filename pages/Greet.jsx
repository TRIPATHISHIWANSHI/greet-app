import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Message } from "../components/Message";

export const Greet = ()=>{
    console.log('Greet Fn Call');
    //let message = "hgsdkjgf"; // Welcome FirstName+LastName
    //const names = {};
    const [names, setNames] = useState({});
    const firstNameKey = "first";
    const lastNameKey = "last";

    // Hooks
    // all hooks are start with use Keyword, hooks are functions (Logic, API Calls)
   const [message , setMessage] =  useState("");// update the state (re-rendering)
    
    const recDataFromChild = (data, key)=>{
       // names[key] = data;
       const temp = {};
        temp[key] = data;
        setNames({...names,...temp});
        
    }
    const initCap = (value)=>value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
    
    const showFullName = ()=>{
        console.log('All Names ', names);
          setMessage("Welcome "+ initCap(names[firstNameKey])+" " + initCap(names[lastNameKey])); // Re-Rendering Happens Here
        console.log('Full Name is ', message);
    }
    const clearAll = ()=>{
        console.log('Clear All call');
        const temp = {};
        temp[firstNameKey] = "";
        temp[lastNameKey] = "";
        setNames(temp);
        setMessage("");
    }
    return (<div>
            <Message msg="Greet App" myclass ="info"/>
            <Input val = {names[firstNameKey]} fn = {recDataFromChild} inputKey={firstNameKey} lbl='First Name' placeholder='Type First Name'/>
            <Input val = {names[lastNameKey]} fn = {recDataFromChild} inputKey={lastNameKey} lbl = 'Last Name' placeholder='Type Last Name'/>
            <Button fn = {showFullName} msg='Greet' cssclass='btn btn-primary me-2'/>
            <Button fn = {clearAll} msg='Clear All' cssclass='btn btn-secondary'/>
            {message && <Message msg={message} myclass="success"/>}
    </div>);
}