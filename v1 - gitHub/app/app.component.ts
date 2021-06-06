import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  about: boolean = false;
  books: boolean = false;
  contact: boolean = false;
  work: boolean = false;


  changeState(section:string): void {
    switch(section) {
      case "about":
        this.about = true;
        this.books = false;
        this.contact = false;
        this.work = false;
        $("html").css("background",'#FCFBF7');  
        $("body").css("background",'#FCFBF7');      
        $(".nav").css("color","#5698c8");          
        break;
      case "books":
        this.about = false;
        this.books = true;
        this.contact = false; 
        this.work = false;
        $("html").css("background",'#FCFBF7');  
        $("body").css("background",'#FCFBF7');  
        $(".nav").css("color","#5698c8"); 
        break;
      case "contact":
        this.about = false;
        this.books = false;
        this.contact = true;
        this.work = false;
        $("html").css("background",'#FCFBF7');  
        $("body").css("background",'#FCFBF7');  
        $(".nav").css("color","#5698c8");  
        break;
      case "work":
        this.about = false;
        this.books = false;
        this.contact = false;
        this.work = true;
        $("html").css("background",'#FCFBF7');  
        $("body").css("background",'#FCFBF7'); 
        $(".nav").css("color","#5698c8");  
        break;
      };   
  }

  //For Bootstrap Modal
  constructor(private modalService: NgbModal) {}

  closeResult: string = "";

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  

  
    
  
  


  
}
