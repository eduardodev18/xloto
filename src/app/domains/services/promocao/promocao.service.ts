import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor(private db: AngularFireDatabase) { }

  // ENVIAR DICAS LOTERICAS
  enviarDicasLoterica(payload) {
    this.db.list('dicasLoterica').push(payload)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  // ENVIAR PROMOÇÃO
  enviarPromocao(payload) {
    this.db.list('promocaoDataTitulo').push(payload)
      .then((result: any) => {
        console.log(result.key);
      });
  }

   // ENVIAR BONUS
   enviarBonus(payload) {
    this.db.list('bonus').push(payload)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  enviarChamada(payload) {
    this.db.list('promocaoChamada').push(payload)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  buscarDicas() {
    return this.db.list('dicasLoterica')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  buscarChamada() {
    return this.db.list('promocaoChamada')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  buscarPromocaoDataTitulo() {
    return this.db.list('promocaoDataTitulo')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  buscarBonus() {
    return this.db.list('bonus')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  enviarStatusBonus(payload) {
    this.db.list('statusBonus').push(payload)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  buscarStatusBonus() {
    return this.db.list('statusBonus')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

}
