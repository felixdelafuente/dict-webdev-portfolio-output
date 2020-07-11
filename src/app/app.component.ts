import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Hello World';
  items: Observable<any[]>
  isDisabled = false;
  constructor(private firestore: AngularFirestore) { }
  
  ngOnInit(): void{
    this.items = this.firestore.collection('data').valueChanges();
  }
}
