import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private readonly afs: AngularFirestore) { }

  async getCollection(): Promise<any[]> {
    try {
      const querySnapshot = await this.afs.collection('mycollection').get().toPromise();
      if (querySnapshot) {
        const data: any[] | PromiseLike<any[]> = [];
        querySnapshot.forEach(doc => {
          data.push(doc.data());
        });
        return data;
      }
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];
    }
    return [];
  }
}
