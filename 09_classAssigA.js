class vehicle {
      constructor(brand, model,vehicaltype , enginetype){
        this.brand=brand;
        this.model=model;
        this.vehicaltype=vehicaltype;
        this.enginetype=enginetype;
      }
      details(){
       
        console.log(`
        Brand : ${this.brand}
        Model : ${this.model}
        Vehicle type : ${ this.vehicaltype}
        Engine type : ${ this.enginetype}`);

        console.log(`------------------------------------`);
      }
      

}
console.log(`Vehicle data`);
const BMW = new vehicle("BMW","M5 comptition","sports car","v6 engine");
BMW.details(); 
const mercedes = new vehicle("Mercedes","AMG GT63","sports car","v8 engine")
mercedes.details();

    const arrayOfvehicle =[BMW,mercedes]
    for (const element of arrayOfvehicle) {

        element.details();
    }




