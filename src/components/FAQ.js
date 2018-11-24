import React from 'react';

const FAQ = () => {
    return(
        <div className="faq-window">
        <div className="button-close"></div>
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
                <li>
                    <h4>I am confused. I am a recruiter and I can't judge engineers by this little squares anymore. How do I know who to hire then?</h4>
                    <p>Evaluating someone's ability of cooking by how much time they spend at the kitchen doesn't seems a good idea... By the way, coincedantelly, I looking for a good job now. So you can hire me.</p>
                    

                </li>
            </ul>
        </div>
    );
}

export default FAQ;