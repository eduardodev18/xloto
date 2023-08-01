import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GestaoService {

  constructor(private db: AngularFireDatabase) { }

  // PLANO BÁSICO MENSAL
  enviarPlanoMensaisBasico(planos) {
    this.db.list('gestaoPlanosMensaisBasico').push(planos)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  buscarPlanoMensaisBasico() {
    return this.db.list('gestaoPlanosMensaisBasico')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  atualizarPlanoMensalBasico(planos, key: string) {
    this.db.list('gestaoPlanosMensaisBasico').update(key, planos)
      .catch((error: any) => {
        console.error(error);
      });
  }

  // PLANO BÁSICO ANUAL
  enviarPlanoAnualBasico(planos) {
    this.db.list('gestaoPlanosAnualBasico').push(planos)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  buscarPlanoAnualBasico() {
    return this.db.list('gestaoPlanosAnualBasico')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  atualizarPlanoAnualBasico(planos, key: string) {
    this.db.list('gestaoPlanosAnualBasico').update(key, planos)
      .catch((error: any) => {
        console.error(error);
      });
  }

  // PLANO COMPLETO MENSAL

  enviarPlanoMensalCompleto(planos) {
    this.db.list('gestaoPlanosMensalCompleto').push(planos)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  buscarPlanoMensalCompleto() {
    return this.db.list('gestaoPlanosMensalCompleto')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  atualizarPlanoMensalCompleto(planos, key: string) {
    this.db.list('gestaoPlanosMensalCompleto').update(key, planos)
      .catch((error: any) => {
        console.error(error);
      });
  }

  // PLANO COMPLETO ANUAL

  enviarPlanoAnualCompleto(planos) {
    this.db.list('gestaoPlanosAnualCompleto').push(planos)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  buscarPlanoAnualCompleto() {
    return this.db.list('gestaoPlanosAnualCompleto')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  atualizarPlanoAnualCompleto(planos, key: string) {
    this.db.list('gestaoPlanosAnualCompleto').update(key, planos)
      .catch((error: any) => {
        console.error(error);
      });
  }

  // COMPRA COLETIVA

  envarCompraColetiva(planos) {
    this.db.list('gestaoCompraColetiva').push(planos)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  buscarCompraColetiva() {
    return this.db.list('gestaoCompraColetiva')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  atualizarCompraColetiva(planos, key: string) {
    this.db.list('gestaoCompraColetiva').update(key, planos)
      .catch((error: any) => {
        console.error(error);
      });
  }


  // ENVIAR COMPRADORES
  enviarCompradores(compradores) {
    this.db.list('compradoresGestao').push(compradores)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  // BUSCAR COMPRADORES
  buscarCompradores() {
    return this.db.list('compradoresGestao')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  // EXCLUIR
  deleteCompradores(key: string) {
    this.db.object(`compradoresGestao/${key}`).remove();
  }


  // ENVIAR CONTATO
  enviarContato(contato) {
    this.db.list('gestaoContato').push(contato)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  // BUSCAR CONTATOS
  buscarContatos() {
    return this.db.list('gestaoContato')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }
}
