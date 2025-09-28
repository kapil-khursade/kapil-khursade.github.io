import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [disableSend, setDisableSend] = useState(false);
    const [messageSend, setMessageSent] = useState('');
    const form = useRef<any>(null);

    useEffect(() => {
        setDisableSend(name==='' || email==='' || message==='')
    }, [name, email, message]);

    const sendEmail = (e: any) => {
            e.preventDefault();

    emailjs
      .sendForm('service_bipup5k', 'template_l4dpncb', form.current, {
        publicKey: 'p_LdBJU-8bQGzT8rz',
      })
      .then(
        () => {
          setMessageSent('SUCCESS')
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageSent(`ERROR IN SENDING MESSAGE: ${error.text}`)
        },
      );

    }


    return (
        <div className="flex justify-center items-center p-6 min-h-[calc(100vh-80px)] mx-auto mesh-gradient-center overflow-hidden">
            <div className="grid grid-cols-1 gap-2 rounded-lg border border-gray-10 bg-white dark:bg-transparent p-4 shadow-xs transition hover:shadow-lg sm:p-6">
                <p className="text-center text-sm font-semibold tracking-wide text-balance text-gray-900 sm:text-4xl dark:text-purple-400">
                    Bringing your ideas to life. <br />
                    Let's turn your vision into reality
                </p>
                <p className="text-center text-sm font-semibold tracking-wide text-balance text-gray-900 sm:text-1xl dark:text-white">
                    Have a project in mind or just want to chat? Let's connect!
                </p>
                <div className="w-full">
                    {messageSend==='' ?
                    <form className="bg-white dark:bg-black rounded-lg border border-rose-10 shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label className="block text-black dark:text-white text-sm font-bold mb-2" htmlFor="username">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                             id="name" type="text" placeholder="Your Name"  name="user_name"
                             value={name}
                             onChange={(e) => setName(e.target.value)}
                             />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black dark:text-white text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                             id="email" type="email" placeholder="contact@example.com"  name="user_email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black dark:text-white text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline" 
                            id="message" placeholder="Your Message" rows={5}  name="message"
                            value={message}
                             onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <button disabled={disableSend} className="bg-blue-500 dark:bg-black dark:border-1 hover:bg-blue-700 dark:hover:bg-white/20 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form> :
                    <p>{messageSend==='SUCCESS' ? 'Message Sent! Will get Back to You Soon' : messageSend}</p> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact