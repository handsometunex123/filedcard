import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage$: Subject<any> = new BehaviorSubject<any>(null);
  constructor() { }

  setMessage(message: Message) {
    this.clearMessage();
    this.currentMessage$.next(message);
    setTimeout(() => {
      this.clearMessage();
    }, 8000);
  }

    /**
   * Clears the notification message
   */
  clearMessage() {
    this.currentMessage$.next(null);
  }

  /**
   * Play notification sound
   */
  // playAudio() {
  //   const audioObj = new Audio('assets/audio/notification.mp3');
  //   audioObj.addEventListener('canplaythrough', event => {
  //     /* the audio is now playable; play it if permissions allow */
  //     audioObj.play();
  //   });
  // }
}


export class Message {
  type: string;
  title: string;
  body: string;
  category?: string;
  actionUrl?: string;

  constructor(obj?: any) {
    this.type = obj && obj.type || 'info';
    this.title = obj && obj.title || null;
    this.body = obj && obj.body || null;
    this.category = obj && obj.category || null;
    this.actionUrl = obj && obj.actionUrl || null;
  }
}

