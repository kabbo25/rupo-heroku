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
                <p>1. Authentication is used to verify the identity of a registered user. Authentication is the process of verifying credentials: user ID (name, email address, phone number) and password. There are many types of authentication like passwords, pins, Two-factor authentication (2FA), and Multi-factor authentication (MFA).


                    Authorization - granting a certain person or group of persons the right to perform certain actions. In a secure environment, after the user's identity has been successfully authenticated by the system. The authorization process determines whether an authenticated person has access to certain resources: information, files, database. But if documents are available for anyone then, authorization without identification and even more so authentication is very possible.

                    Example: Google asks for a password, the user enters it, and the system agrees that the user seems to be really real since the password matched - this is authentication

                    After that, the system will grant the user the right to read letters in his mailbox and stuff like that - this is an authorization.

                    .</p>

                <p>
                    2 Firebase can help with user registration and authorization, session storage (authorized users), and media files that can be easily accessed.

                    Firebase is really very beginner-friendly and offers a lot of great features other than authentication

                    Firestore: A scalable, real-time NoSQL database solution that any frontend can use
                    Storage: We use it mainly for images.
                    Notifications: A very easy-to-implement notification service.
                    Hosting: affordable and convenient hosting of static sites. We hosted our React frontend application there.
                    Functions: work in the cloud and can respond to any events at the data level. We used them mainly for sending notifications.

                </p>
                <p>
                    3.
                    irebase stores text data in JSON format and provide convenient methods for reading, updating, and retrieving the data.

                    we use  Firebase because the application does not require a backend, it only needs to implement a user interface. It has great features for free and it is very easy to use. it has flexibility and speed of deploying to a project. It is a powerful tool, in one evening we can add the functionality of any module by reading, saving data, and showing the customer a functional example.

                    Alternative to firebase for authentication:
                    Keycloak, Okta,Supabase,auth0,Ory,STYTCH, etc.
                </p>
            </p>

        </div>

    );
};

export default Experts;