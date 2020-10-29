var app = new Vue({
    el: '#app',
    /* CRISTIAN BALLESTEROS */
    /* LIZETH ORTIZ  */
        /* 2. Una distribuidora  de Medellín desea saber el total a pagar de un empleado teniendo en cuenta las siguientes condiciones:
        A cada empleado se le pagara un salario Base mensual de 230.000 pesos, además se tendrán en cuenta las horas laborales diarias y las extras
        que labore teniendo en cuenta que la jornada laboral es de 9 horas diarias las q superen este número se tomaran como horas extras.
        (Suponer 5 días a la semana y 4 semanas al mes). Valor hora laboral normal $4200. Las horas extras se pagan un 50% más que las normales.
        Los impuestos a deducir a los trabajadores varían en función de su sueldo mensual (considerando las horas normales y extras trabajadas):
        Si el sueldo es menor de $600.000, NO PAGARA impuestos y se le dará una bonificación del 10 %.
        Si el sueldo está entre $600.000 y $1.000.000, los impuestos son el 20%.
        Si el sueldo es mayor de $1.000.000, los impuestos son el 30% */
    data: {
        horasL:0,
        sueldoNeto:0,
        sueldo:0,
        horasX:0,
    },
    methods: {
    /* SUELDO SIN BONIFICACIONES NI DESCUENTOS */
        calcularSueldoNeto:function(){
            if(this.horaL>180){
                this.horasX=this.horasL-180
                this.sueldoNeto=230000+(180*4200)+(this.horasX*6300)
            } else{
                this.sueldoNeto=230000+(this.horasL*4200)
            }
        },
        
    /* SUELDO FINAL CON BONIFICACIONES O DESCUENTOS */
        calcularSueldo:function(){
            app.calcularSueldoNeto()
           if(this.sueldoNeto<600000){
               this.sueldo=this.sueldoNeto+(this.sueldoNeto*0.1)
           } else if(this.sueldoNeto>=600000 && this.sueldoNeto<=1000000){
               this.sueldo=this.sueldoNeto-(this.sueldoNeto*0.2)
           } else{
               this.sueldo=this.sueldoNeto-(this.sueldoNeto*0.3)
           }
        } 
      } ,
     
    },)