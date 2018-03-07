import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progress: number = 50;
  
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue: number ){
    //let elemtHTML: any = document.getElementsByName('progreso')[0];
    
    if (  newValue >= 100){
      this.progress = 100;
    } else if( newValue <= 0 ){
      this.progress = 0; 
    }else{
      this.progress = newValue;
    }
    
    this.txtProgreso.nativeElement.value = this.progress;
    
    this.cambioValor.emit( this.progress );
    
  }

  cambiarValor(valor: number){
    if(this.progress >= 100 && valor > 0){
      this.progress = 100;
      return;
    }
    if(this.progress <= 0 && valor < 0){
      this.progress = 0;
      return;
    }

    this.progress += valor;

    this.cambioValor.emit( this.progress );

    this.txtProgreso.nativeElement.focus();
  }

}
