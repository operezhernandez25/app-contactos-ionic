import { Component, OnInit, Input } from '@angular/core';
import { NavController,ModalController,NavParams,LoadingController } from '@ionic/angular';

import {ContactoServiceService} from '../services/contacto-service.service'
//interface
import {Contacto} from '../interfaces/contacto';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss']
  })
export class DetallesPage implements OnInit {

  @Input() titulo:string;
  @Input() id:number;
  nuevoContacto:Contacto;
  constructor(navParams: NavParams, private nav:NavController,
              private modalCtrl:ModalController, private servicioContacto:ContactoServiceService,
              private loadingController:LoadingController) { 
                this.nuevoContacto={
                  nombres:'',
                  apellidos:'',
                  telefono:'',
                  descripcion:''
                };
              }

  ngOnInit() {
    if(this.id>0) this.nuevoContacto= this.servicioContacto.obtenerContacto(this.id);
  }

  cerrarModal(){
   
    console.log(this.servicioContacto.contactos);
    this.modalCtrl.dismiss();
  }

  mostrarNuevoContacto()
  {
    if(this.nuevoContacto.nombres=="")
      console.log("campo vacio");
    else if(this.nuevoContacto.apellidos=="")
      console.log("Apellidos vacio")
    else if(this.nuevoContacto.telefono=="")
      console.log("Telefono requerido")
    else if(this.nuevoContacto.descripcion=="")
      console.log("Descripcion requerido")
    else{
      this.presentLoading();
    this.servicioContacto.guardarContacto(this.nuevoContacto).then(val=>{
      this.loadingController.dismiss();
      this.cerrarModal();
    });
    }
  

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();

    console.log('Loading dismissed!');
  }

  modificaciondecampo(){
    console.log("se modifico un campo");
  }


  


 

}
