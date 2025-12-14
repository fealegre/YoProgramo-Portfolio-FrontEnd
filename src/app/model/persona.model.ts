export class Persona{
    public id?:number;
    public nombre:string;
    public apellido:string;
    public img:string;

    constructor(nombre:string,apellido:string,img:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
    }
}