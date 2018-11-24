import React from 'react';

const FAQ = () => {
    return(
        <div className="faq-window">
            <ul>
                <li>
                    <h4>What is that?</h4>
                    <p>This is an app that allows you to make your github board into a an art. When you draw, it automatically generates a script, which will commit it into a repository you provide.</p>
                </li>
                <li>
                    <h4>Why?</h4>
                    <p>For fun. One person told me that he once had manually change commit date. I kept in in my head for a few days that idea was born. Many engineers don't care about a GH calendar and just leave it empty. I realised that this can be used as a opportunity to create something cool :)</p>
                </li>
                <li>
                    <h4>Tips</h4>
                    <p>Follow instructions on a main page and make sure you have rights to execute commands. To make it easier, just create a new repository for your gitsaver. Then, when you can just delete that repository to clean up board.</p>
                </li>
            </ul>
        </div>
    );
}

export default FAQ;