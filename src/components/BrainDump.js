import React from "react"; 


function BrainDump(props){
    return (
            <div className="b-dump">
                <h1>Brain Dump</h1>
                <form>
                    <textarea className="b-text"></textarea>
                </form>
            </div> 
    );
};

export default BrainDump;