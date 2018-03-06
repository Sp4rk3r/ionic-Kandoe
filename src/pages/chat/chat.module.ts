import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import {EmojiPickerComponentModule} from "../../components/emoji-picker/emoji-picker.module";
import {EmojiProvider} from "../../providers/emoji";
import {ChatService} from "../../providers/chat-service";
import {RelativeTime} from "../../pipes/relative-time";

@NgModule({
  declarations: [
    ChatPage,
    RelativeTime,
  ],
  imports: [
    EmojiPickerComponentModule,
    IonicPageModule.forChild(ChatPage),
  ],
  exports: [
    ChatPage
  ],
  providers:[
    ChatService,
    EmojiProvider
  ]
})
export class ChatPageModule {}
