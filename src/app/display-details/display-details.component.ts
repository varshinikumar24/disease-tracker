import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  datas$: Object;
  diseaseForm: FormGroup;
  constructor(private data: DataService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.data.getDetails().subscribe(
      data => this.datas$ = data 
    );
  }
  
  
  onSubmit(){
    console.log(this.diseaseForm);
    
  }
  private initForm(){
    let countryName='';
    this.diseaseForm=new FormGroup({
       'country' : new FormControl(countryName)
    });
  }

}
