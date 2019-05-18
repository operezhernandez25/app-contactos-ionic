import { Component, OnInit } from '@angular/core';
import {ModalController,LoadingController,AlertController} from '@ionic/angular';
import {DetallesPage} from '../detalles/detalles.page';

import {ContactoServiceService} from '../services/contacto-service.service';
import { NgForm } from '@angular/forms';

import {Contacto} from '../interfaces/contacto';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage implements OnInit{

  contactos:any=this.contactoServicio.contactos;;

  constructor(public modalController:ModalController, 
              private contactoServicio:ContactoServiceService,private alertController: AlertController,
              private loadingController: LoadingController){
    
  }
  ngOnInit(){
    /*this.contactoServicio.mostrarContactos().then(data=>{
        this.contactos=data["contactos"];
        console.log(this.contactos);
    });*/
  }

  titulos=["Nuevo contacto","Modificar Contacto"];

  async presentModal(titulo,id=0){
    const modal = await this.modalController.create({
      component:DetallesPage,
      componentProps:{'titulo':titulo,
                      'id':id}
    });
    await modal.present();

    return await modal.onDidDismiss();
  }

  async presentAlert(contacto:Contacto) {
    const alert = await this.alertController.create({
      header: '¿Desea eliminar a este contacto?',
      message: 'No se podrá deshacer esta operación',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => {
            this.contactoServicio.eliminarContacto(contacto);
            
          }
        }
      ]
    });
  
    await alert.present();
  }

  filterBy(prop: string) {
    return this.contactos.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }



}
