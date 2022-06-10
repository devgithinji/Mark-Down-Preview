import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import * as domain from "domain";

const App = () => {

    const [markdown, setMarkDown] = useState('## markdown preview')

    return (
        <main>
            <section className='markdown'>
                <textarea name="" id="" cols="30" rows="10" className='input' value={markdown}
                          onChange={(e) => setMarkDown(e.target.value)}></textarea>
                <article className='result'>
                    <ReactMarkdown>
                        {markdown}
                    </ReactMarkdown>
                </article>
            </section>
        </main>
    )
}

export default App
