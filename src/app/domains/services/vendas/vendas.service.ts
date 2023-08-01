import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private db: AngularFireDatabase) {}

  // ENVIAR PLANOS
  enviarPlanos(planos) {
    this.db.list('vendasPlanos').push(planos)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  // ENVIAR COMPRA COLETIVA
  enviarPlanosColetiva(planos) {
    this.db.list('vendasPlanosColetiva').push(planos)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  // BUSCAR PLANOS INICIAIS VENDAS
  buscarPlanosIniciais() {
    return this.db.list('vendasPlanos')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  // BUSCAR PLANOS VENDA COLETIVA
  buscarPlanosIniciaisColetiva() {
    return this.db.list('vendasPlanosColetiva')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  // Atualizar Planos Iniciais
  atualizarPlanosIniciais(planos, key: string) {
    this.db.list('vendasPlanos').update(key, planos)
      .catch((error: any) => {
        console.error(error);
      });
  }

   // Atualizar Planos Iniciais
   atualizarPlanosColetivos(planos, key: string) {
    this.db.list('vendasPlanosColetiva').update(key, planos)
      .catch((error: any) => {
        console.error(error);
      });
  }

  // ENVIAR COMPRADORES
  enviarCompradores(compradores) {
    this.db.list('compradoresVendas').push(compradores)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  // BUSCAR COMPRADORES
  buscarCompradores() {
    return this.db.list('compradoresVendas')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

   // EXCLUIR
   deleteCompradores(key: string) {
    this.db.object(`compradoresVendas/${key}`).remove();
  }

  // ENVIAR CONTATO
  enviarContato(contato) {
    this.db.list('vendasContato').push(contato)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  // BUSCAR CONTATOS
  buscarContatos() {
    return this.db.list('vendasContato')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }
}
