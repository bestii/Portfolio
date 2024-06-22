import { FC } from 'react';

type SendMsgTemplateProps = {
  firstName: string;
};

const SendMsgTemplate: FC<SendMsgTemplateProps> = ({ firstName }) => {
  return (
    <div>
      <h1>Hi, From {firstName}!</h1>
    </div>
  );
};

export default SendMsgTemplate;
