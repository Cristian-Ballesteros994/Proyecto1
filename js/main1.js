var app = new Vue({
  el: '#app',
  /* CRISTIAN BALLESTEROS */
  /* LIZETH ORTIZ  */
  data: {
    
    VpromProgramacion2:'-',
    VpromCalculo:'-',
    VpromQuimica:'-',
    VpromSemestre:'-',
    VproyInt:'-',
    VpromSemestre:'-',
    promProgramacion2:0,
    promCalculo:0,
    promQuimica:0,
    promSemestre:0,
    /* Programacion */
      proPar1:0,
      proPar2:0, 
      proQuiz1:0,
      proQuiz2:0,
      proTrab1:0,
      proTrab2:0,

    /* Calculo */
      calPar1:0,
      calPar2:0,
      calQuiz1:0,
      calQuiz2:0,

    /* Quimica */
      quimPar:0,
      quimQuiz:0,
      quimTrab:0,

    /* Proyecto integrador */
      proyInt:0,
  },
  methods: {
      calcularNotaProgramacion:function(){
         const promProgramacion=parseFloat(this.proPar1)*0.2+parseFloat(this.proPar2)*0.2+parseFloat(this.proQuiz1)*0.1+parseFloat(this.proQuiz2)*0.1+parseFloat(this.proTrab1)*0.2+parseFloat(this.proTrab2)*0.2
         this.promProgramacion2=(promProgramacion*0.9)+(parseFloat(this.proyInt)*0.1)
         this.VpromProgramacion2=this.promProgramacion2<3?'Reprobado':'Aprobado'
      } ,

      calcularNotaCalculo:function(){
        this.promCalculo=parseFloat(this.calPar1)*0.3+parseFloat(this.calPar2)*0.3+parseFloat(this.calQuiz1)*0.2+parseFloat(this.calQuiz2)*0.2
        this.VpromCalculo=this.promCalculo<3?'Reprobado':'Aprobado'
     } ,

     calcularNotaQuimica:function(){
      this.promQuimica=parseFloat(this.quimPar)*0.45+parseFloat(this.quimQuiz)*0.25+parseFloat(this.quimTrab)*0.3
      this.VpromQuimica=this.promQuimica<3?'Reprobado':'Aprobado'
     
   } ,
      calcularPromedioSemestre:function(){
        app.calcularNotaCalculo()
        app.calcularNotaProgramacion()
        app.calcularNotaQuimica()
        this.promSemestre=(this.promProgramacion2/4)+(this.promCalculo/4)+(this.promQuimica/4)+(this.proyInt/4)
        if(this.promSemestre>4.7){ 
          alert('El estudiante fue becado')
        }
        this.VproyInt=this.proyInt<3?'Reprobado':'Aprobado'
        this.VpromSemestre=this.promSemestre<3?'Semestre Reprobado':'Semestre Aprobado'
        }
    } ,
   
  },)