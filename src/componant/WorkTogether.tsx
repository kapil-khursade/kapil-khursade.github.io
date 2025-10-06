import { TbMessageChatbotFilled } from "react-icons/tb";
import MailToBtn from "./MailToBtn";

function WorkTogether() {
    return (
        <div
            className="justify-items-center content-center relative overflow-hidden rounded-xl group cursor-pointer w-full "
        >
            <TbMessageChatbotFilled className="dark:text-white text-purple-400 mb-3" size={80} />
            <h2 className="text-white text-lg font-semibold mb-3">Let's Work Together!</h2>
            <p className="text-gray-300 text-sm mb-3">Have a project in mind? Let's talk about it.</p>
            <div className="w-auto justify-items-center">
                <MailToBtn />
            </div>
        </div>
    )
}

export default WorkTogether