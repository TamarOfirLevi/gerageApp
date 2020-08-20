import { Component, OnInit } from '@angular/core';
// import { mishap } from '../classes';
// import { MishapServiceService } from 'src/app/services/mishap-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



// @Component({
//   selector: 'app-update-mishap',
//   templateUrl: './update-mishap.component.html',
//   styleUrls: ['./update-mishap.component.scss'],
//   providers : [
//     mishap
//  ]
// })
// export class UpdateMishapComponent implements OnInit {
//   public mishap: mishap;

//   constructor( private mishapserv: MishapServiceService/*,private toastr : ToastrService*/) {
//     this.mishap=new mishap();
//    }

//   saveImage(event){
//   // this.mishap.mishap_img=  event.target.files[0].name;
//   if (event.target.files && event.target.files[0]) {
//     var reader = new FileReader();
//     reader.readAsDataURL(event.target.files[0]); 
//     reader.onload = (_event) => { 
//       this.mishap.mishap_img = reader.result; 
//    //reader.onload = (event: ProgressEvent) => {
//     //this.mishap.mishap_img = (<FileReader>event.target).result;
//   }

//   //reader.readAsDataURL(event.target.files[0]);
// }
//   }
//   saveMishap(){
// this.mishapserv.insertMishap(this.mishap);
// // this.mishapserv.getMishaps();
//   }
//   // onDelete(id: number) {
//   //   if (confirm('Are you sure to delete this record ?') == true) {
//   //     this.mishapserv.deleteMishap(id)
//   //     .subscribe(x => {
//   //       this.mishapserv.getMishaps();
//   //       this.toastr.warning("Deleted Successfully","Employee Register");
//   //     })
//   //   }
//   // getMishaps(){
//   //    this.mishapserv.getMishaps();
//   // }
//   /////////////////////////
//   // getMishaps(){
//   //   let mishaps:mishap[];
//   //   this.mishapserv.getMishaps().subscribe(
//   //     data => {
//   //       mishaps = data as mishap[];
//   //     }
//   //   );

//   //   }
//   ngOnInit() {
   
//     console.log(this.mishap);
//   }

// }
