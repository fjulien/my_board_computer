import React, {useState} from 'react';
import { ToDo } from './ToDo';

import './tomorrow-must-to-do.scss';

export const TomorrowMustToDo = () => {

    const [text, setText] = useState('test');

    return (
        <section className="tomorrow-must-to-do">
            <h2 className='neon'>Tomorrow must to do</h2>
            <ToDo
                value={text}
                valueChange={setText}
            />
            <button>
                Clean all
            </button>
        </section>
    );
};
