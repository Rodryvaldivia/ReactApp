import React from "react";
import Addtask from "./Addtask";

let addTaskButton = document.querySelector(".addtask-button");
let task = [];


 export default function TaskModel (){
   return (
       <div className="big-box-task">
           <div className="TaskModel">
               <div className="infotask">
                   <h4>Task Title</h4>
                   <p>Task description</p>
               </div>
               <div className="checkbox-container">
                   <button className="checkbox">
                   </button>
               </div>
           </div>
       </div>
   )
}