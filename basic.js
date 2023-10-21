import React from "react";
import ReactDOM  from "react-dom/client";

// ************* 01 -- Assignment *************

const root = ReactDOM.createRoot(
    document.getElementById('root')
    );

// ************* 03 -- Assignment *************

    const item1 = React.createElement('h1', null, 'Heading 1');
    const item2 = React.createElement('h2', null, 'Heading 2');
    const element = React.createElement('div', {
        className: 'heading',
        id: 'title'
    }, [item1, item2]);

// ************* 04 -- Assignment *************

    // using React.createElement

    const header = React.createElement('div', {
        className: "title",
        key: "header"
    }, [React.createElement('h1', null, 'heading 1'),
    React.createElement('h2', null, 'heading 2'),
    React.createElement('h3', null, 'heading 3')
    ])

    // using JSX

    const Header2 = 
         (
            <div className="title" key={'title'}>
                <h1 key={'h1'}>heading 1 JSX</h1>
                <h2 key={'h2'}>heading 2</h2>
                <h3 key={'h3'}>heading 3</h3>
                <h3 key={'h4'}>heading 4</h3>
                <HeaderJSX />
            </div>
        );

    // using functional component of JSX

    function HeaderJSX() {
        return (
            <div className="title" key={'title'}>
                <h1 key={'h1'}>heading 1</h1>
                <h2 key={'h2'}>heading 2</h2>
                <h3 key={'h3'}>heading 3</h3>
                <h4 key={'h4'}>heading 4</h4>
                 
            </div>
        );
    }

    // header using functional component


    root.render(Header2);