import React from 'react';
// import Expert from '../Expert/Expert';

// const experts = [
//     { id: 1, name: 'Will Smith', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
//     { id: 2, name: 'Chris Rock', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
//     { id: 3, name: 'Dwayne Rock', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
//     { id: 4, name: 'Messy Vai', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
//     { id: 5, name: 'Ronaldo Bro', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
//     { id: 6, name: 'Stachy Jhonson', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
// ]

const Experts = () => {
    return (
        // <div id="experts" className='container'>
        //     <h2 className='text-primary text-center mt-5'>Our Experts</h2>
        //     <div className="row">
        //         {
        //             experts.map(expert => <Expert
        //                 key={expert.id}
        //                 expert={expert}
        //             ></Expert>)
        //         }
        //     </div>
        // </div>
        <div>
            <p className="text-center, fw-bold, mx-auto, m-5">
                Question Ans:
                <p>1. JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of required libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append to the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirements. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding writing a lot of code.

                    Node.js also holds a lot of relative libraries, which we normally use in javascript for general-purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program. It mainly helps us execute some non-blocking operations like some operating system special information like certificate details or hardware details; we may use node js on the same, which help us do it, and JavaScript normal programming will not help us on the same. Normally all browsers have a JavaScript engine that helps us to run javascript in a web browser. Spider monkey (Firefox), JavaScript Core (Safari), and V8 (Google Chrome) are some popular javascript engines using verities browsers. But node js is using the V8 engine directly, with some libraries to do some I/O or networking operations. It actually helps us use JavaScript from outside of the browser, like creating, writing, or executing one shell script, some back-end services, or running on hardware. Let us understand  JavaScript vs

                    .</p>

                <p>
                    2 MongoDB and NodeJS are two different technologies. MongoDB is a database system that gives you a chance to efficiently store documents in a database and to perform operations like data updates, or searching documents by some criteria.

                    NodeJS's responsibility is especially to execute your application..

                </p>
                <p>
                    3.
                    The five critical differences between SQL vs NoSQL are:

                    SQL databases are relational, and NoSQL databases are non-relational.
                    SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </p>

        </div>

    );
};

export default Experts;