import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const onSubmitClick = async (e) => {
        e.preventDefault();
        send(
            'service_ajbkikh',
            'template_uy9fhn8',
            { name, email, phone, message, subject },
            '2wxqnW9FhdoJtNgEZ'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });    }

    return (
        <>
            <div className="container mt-5">
                <main role="main" className="pb-3">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 jumbotron">
                            <h2>Contact Myself:</h2>
                            <input
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <br/>
                            <input
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <br />
                            <input
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            <br />
                            <input
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                            />
                            <br />
                            <textarea
                                name="text"
                                placeholder="What's on your mind?"
                                className="form-control"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                rows="20">
                            </textarea>
                            <br />
                            <button className="btn btn-primary" onClick={onSubmitClick} > Submit Post</button>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
export default Home;