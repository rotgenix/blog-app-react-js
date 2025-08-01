import { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import hljs from 'highlight.js';
import 'quill/dist/quill.snow.css';
import 'highlight.js/styles/github.css';
import QuillSyntax from 'quill/modules/syntax';
Quill.register('modules/syntax', QuillSyntax);

const MyEditor = () => {
    const editorRef = useRef(null);
    const fileInputRef = useRef(null);
    const [quillInstance, setQuillInstance] = useState(null);
    const [htmlContent, setHtmlContent] = useState('');
    const [initialValue] = useState('<p><strong>Welcome</strong> to Blogsee Editor!</p>');

    // useEffect(() => {
    //     if (!editorRef.current) return;

    //     const toolbarOptions = [
    //         [{ 'font': [] }],
    //         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    //         ['bold', 'italic', 'underline', 'strike'],
    //         [{ 'color': [] }, { 'background': [] }],
    //         [{ 'script': 'sub' }, { 'script': 'super' }],
    //         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    //         [{ 'indent': '-1' }, { 'indent': '+1' }],
    //         [{ 'direction': 'rtl' }],
    //         [{ 'align': [] }],
    //         ['blockquote', 'code-block'],
    //         ['link', 'image', 'video'],
    //         ['clean']
    //     ];

    //     const quill = new Quill(editorRef.current, {
    //         theme: 'snow',
    //         placeholder: 'Type your blog content here...',
    //         modules: {
    //             syntax: {
    //                 hljs
    //             },
    //             toolbar: {
    //                 container: toolbarOptions,
    //                 handlers: {
    //                     image: () => {
    //                         fileInputRef.current.click();
    //                     }
    //                 }
    //             },
    //             history: {
    //                 delay: 2000,
    //                 maxStack: 500,
    //                 userOnly: true
    //             }
    //         }
    //     });

    //     quill.root.innerHTML = initialValue;
    //     quill.on('text-change', () => {
    //         const html = editorRef.current.querySelector('.ql-editor').innerHTML;
    //         setHtmlContent(html);
    //     });

    //     setQuillInstance(quill);
    
    //     // 🔁 Cleanup to prevent duplicate editors
    //     return () => {
    //         if (editorRef.current) {
    //             editorRef.current.innerHTML = '';
    //         }
    //     };
    // }, []);

    useEffect(() => {
        if (!editorRef.current || editorRef.current.__quill) return;

        const toolbarOptions = [
            [{ 'font': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'align': [] }],
            ['blockquote', 'code-block'],
            ['link', 'image', 'video'],
            ['clean']
        ];

        const quill = new Quill(editorRef.current, {
            theme: 'snow',
            placeholder: 'Type your blog content here...',
            modules: {
                syntax: {
                    hljs
                },
                toolbar: {
                    container: toolbarOptions,
                    handlers: {
                        image: () => {
                            fileInputRef.current.click();
                        }
                    }
                },
                history: {
                    delay: 2000,
                    maxStack: 500,
                    userOnly: true
                }
            }
        });

        // Mark the element to prevent re-initialization
        editorRef.current.__quill = quill;
        quill.root.innerHTML = initialValue;
        quill.on('text-change', () => {
            const html = editorRef.current.querySelector('.ql-editor').innerHTML;
            setHtmlContent(html);
        });

        setQuillInstance(quill);

        return () => {
            if (editorRef.current) {
                editorRef.current.innerHTML = '';
                delete editorRef.current.__quill;
            }
        };
    }, []);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Read as base64 (or upload to server)
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            const range = quillInstance.getSelection();
            quillInstance.insertEmbed(range.index, 'image', base64);
        };
        reader.readAsDataURL(file);
    };

    const clearEditor = () => {
        if (quillInstance) {
            quillInstance.setText('');
            setHtmlContent('');
        }
    };

    return (
        <div
            className={``}
            style={{
                marginTop: "40px",
            }}
        >
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />

            <div ref={editorRef} />

            <div className={`flex justify-start items-center gap-[18px]`} style={{ marginTop: 20 }}>
                <button
                    className={`w-[100px] primary-button rounded-[6px] cursor-pointer`}
                    style={{
                        padding: "8px 16px",
                        background: "#D66800",
                    }}
                    onClick={clearEditor}
                >Clear</button>

                <button
                    className={`w-[100px] primary-button rounded-[6px] cursor-pointer border border-[#2D2D2D]`}
                    style={{
                        padding: "8px 16px",
                        background: "white",
                        color: "#2D2D2D",
                    }}
                    onClick={clearEditor}
                >Draft</button>

                <button
                    className={`w-[100px] primary-button rounded-[6px] cursor-pointer`}
                    style={{
                        padding: "8px 16px",
                    }}
                    onClick={clearEditor}
                >Publish</button>
            </div>

            <h4 style={{ marginTop: 40 }}>Blog Preview</h4>

            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '1rem',
                    background: '#f9f9f9',
                    borderRadius: 5,
                    minHeight: 100
                }}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </div>
    );
};

export default MyEditor;
