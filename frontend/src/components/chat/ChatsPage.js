import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const projectId = process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID;
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        projectId,
        props.user.username,
        props.user.secret
    )
    return (
        <div className="background">
            <MultiChatSocket
                {...chatProps}
            />
            <MultiChatWindow
                {...chatProps}
            />
        </div>
    );
};

export default ChatsPage;