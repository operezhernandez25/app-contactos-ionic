import { Injectable } from '@angular/core';
import {Contacto} from '../interfaces/contacto';
@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {
  public idActual=3;
  public contactos:Contacto[] =[{
    id:1,
    nombres:"Oscar Alfredo",
    apellidos:"Perez Hernandez",
    telefono:'+50379246520',
    descripcion:"hola mundo"
  },{
    id:2,
    nombres:"Oscarito",
    apellidos:"Perez",
    telefono:'+50379246520',
    descripcion:"hola mundo"
  }];

  constructor() { }

  mostrarContactos(){
    return new Promise((resolve)=>{
      
      setTimeout(() => {
        resolve({'contactos':this.contactos});
      }, 2000);


    });
  }

  guardarContacto(nuevoContacto:Contacto){
    return new Promise((resolve)=>{
      nuevoContacto.id=this.idActual+1;
      this.idActual++;
      this.contactos.push(nuevoContacto);
      setTimeout(() => {
        resolve(true);
      }, 2000);
    }); 
  }


  eliminarContacto(contactoEliminar:Contacto){
    let indexRemove= this.contactos.indexOf(contactoEliminar);
    if(indexRemove>-1){
      this.contactos.splice(indexRemove,1);
    
    }
  }

  obtenerContacto(id:number):Contacto{
    return  this.contactos.find(contacto=> contacto.id === id);
  }

}
