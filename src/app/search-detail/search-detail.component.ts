import { Component, OnInit,ViewChildren } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  @ViewChildren('f') loginForm:NgForm;
  datas$: Object;
  diseaseForm: FormGroup;
  countryName="";
  country=""
  
  constructor(private data: DataService,private router: Router,private route:ActivatedRoute) { 
    this.route.params.subscribe( params => this.datas$ = params.id );
  }

  ngOnInit(): void {
    this.data.getDetails(this.datas$).subscribe(
      data => this.datas$ = data 
    );
    //let countryName='';
    this.diseaseForm=new FormGroup({
       'country' : new FormControl(null)
    });
  }
  
  
  onSubmit(){
    console.log(this.diseaseForm.value.country);
    
  }
 

  

}
