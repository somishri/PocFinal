import { Injectable } from "@angular/core";
import { Subject, Observable,BehaviorSubject } from 'rxjs';

@Injectable()
export class NotificationService {
    private subject = new BehaviorSubject<number>(0);

    sendMessage(catId: number) {
        this.subject.next(catId);
    }
  
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}