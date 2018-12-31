import React from 'react';

const FAQ = (props) => {
    
    const anim = props.faq ? `appear-l-r` :  `appear-r-l`
    return(
        // appear-l-r appear-r-l
        <div className={`faq-window ${anim}`} >
            <ul>
                <li>
                    <h4>What is that?</h4>
                    <p>This is an app that allows you to make your GitHub board into an art. When you draw, it automatically generates a script, which will commit it into a repository you provide.</p>
                </li>
                <li>
                    <h4>Why?</h4>
                    <p>For fun. One person told me that he once had manually change commit date. I kept in in my head for a few days that idea was born. Many engineers don't care about a GH calendar and just leave it empty. I realized that this can be used as an opportunity to create something cool :)</p>
                </li>
                <li>
                    <h4>Tips</h4>
                    <p>Follow instructions on the main page and make sure you have rights to execute commands. To make it easier, just create a new repository for your gitsaver. Then, when you can just delete that repository to clean up a board. Sometimes it takes up to couple minutes to update calendar.</p>
                </li>
            </ul>
        </div>
    );
}

export default FAQ;