export interface Message {
  mine?: boolean;
  created: Date;
  from: string;
  text: string;
  conversationId: string;
  inChatRoom: boolean;
}
