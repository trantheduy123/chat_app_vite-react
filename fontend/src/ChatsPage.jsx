import { PrettyChatWinDow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ heigh: '100vh' }}>
      <PrettyChatWinDow
        projectId="27ea59e3-713b-4c00-b117-eb8e3fb1a598"
        // eslint-disable-next-line react/prop-types
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ChatsPage;
