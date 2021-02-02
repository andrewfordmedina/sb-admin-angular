
import { Directive, ElementRef, Input, OnInit, HostListener, SimpleChanges, OnChanges } from '@angular/core'
 
@Directive({
  selector: '[uppercase]',
})
export class UpperCaseDirective implements OnChanges  {
 
    private el: HTMLInputElement;
    private value: String;  //<--here you store the "real value"
    @Input() public number: any;
    @Input() public input: any;


    constructor(private elementRef: ElementRef) {
      this.el = this.elementRef.nativeElement;
      this.el.value = this.el.value.toUpperCase();
      console.log(this.el.getAttributeNames);
    }

    @HostListener('keyup', ['$event'])
    onFocus(event) {

        if (event.target.value) {
            console.log('not empty!');
            this.value = event.target.value;
            event.target.value = this.value.toUpperCase();  
          }
          else{ 
            console.log('empty');

        }

    }

    ngOnChanges(changes: SimpleChanges){
        if(changes.input){
          console.log('input changed');
        }

      }

}