import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = "I'm Felix";
  items: Observable<any[]>
  isDisabled = false;
  // imgLink = "src\assets\64character_IC.png";
  x = "Default";

  isShow = false;

  count = [1, 2, 3, 4, 5, 6];

  isGreen = true;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.items = this.firestore.collection('data').valueChanges();
  }

  click(text) {
    this.x = `Click: $(text)`;
  }
}
