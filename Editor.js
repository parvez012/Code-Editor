
import React, { useEffect, useRef } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import ACTIONS from '../Actions';
// import 'codemirror/theme/dracula.css'
// import 'codemirror/keymap/sublime';
// import 'codemirror/mode/'
const Editor = ({ socketRef, roomId, onCodeChange }) => {

    const code = 'const a = 0;';
    return (
        <>
            <div className='CodeMirror'>
                <CodeMirror

                    height='100vh'
                    options={{
                        theme: 'dracula',
                        keyMap: 'sublime',
                        mode: 'jsx',
                    }}
                />
            </div>
        </>

    )
}

export default Editor




// import React, { useEffect, useRef } from 'react';
// import Codemirror from 'codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/addon/edit/closetag';
// import 'codemirror/addon/edit/closebrackets';


// const Editor = ({ socketRef, roomId, onCodeChange }) => {
//     const editorRef = useRef(null);
//     useEffect(() => {
//         async function init() {
//             editorRef.current = Codemirror.fromTextArea(
//                 document.getElementById('realtimeEditor'),
//                 {
//                     mode: { name: 'javascript', json: true },
//                     theme: 'dracula',
//                     autoCloseTags: true,
//                     autoCloseBrackets: true,
//                     lineNumbers: true,
//                 }
//             );

//             editorRef.current.on('change', (instance, changes) => {
//                 const { origin } = changes;
//                 const code = instance.getValue();
//                 onCodeChange(code);
//                 if (origin !== 'setValue') {
//                     socketRef.current.emit(ACTIONS.CODE_CHANGE, {
//                         roomId,
//                         code,
//                     });
//                 }
//             });
//         }
//         init();
//     }, []);

//     useEffect(() => {
//         if (socketRef.current) {
//             socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
//                 if (code !== null) {
//                     editorRef.current.setValue(code);
//                 }
//             });
//         }

//         return () => {
//             socketRef.current.off(ACTIONS.CODE_CHANGE);
//         };
//     }, [socketRef.current]);

//     return <textarea id="realtimeEditor"></textarea>;
// };

// export default Editor;
