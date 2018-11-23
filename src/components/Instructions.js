import React from 'react';

const Instructions = () => {
    return(
        <div className="instructions">
            <h5>Instructions</h5>
            <ol>
                <li>After you finished drawing, click <button>Download Script</button> to download script file</li>
                <li>Open terminal in same folder and run <span>chmod u+x *filename*</span> to make it executable</li>
                <li>Create an empty repository and copy link to it *</li>
                <li>Enter <span>sh *filename*</span> in terminal to run script. Paste link to repo when script ask for it</li>
                <li>Yay!</li>
            </ol>
            <a href="http://www.polevoy.in/" target="_blank">made by polevoy</a>
        </div>
    );
}

export default Instructions;