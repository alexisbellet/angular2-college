import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Certificate } from '../../data/certificates/certificates-model';
import { CertificateService } from '../../services/certificate.service';
import { Diploma } from '../../data/diplomas/diplomas-model';
import { DiplomaService } from '../../services/diploma.service';
declare let $: any;


@Component({
  selector: 'app-change-career-content',
  templateUrl: './change-career-content.component.html',
  styleUrls: ['./change-career-content.component.scss'],
  providers: [ CertificateService, DiplomaService ]
})
export class ChangeCareerContentComponent implements OnInit {
  constructor(private _certificateService: CertificateService, private _diplomaService: DiplomaService, private _router: Router) { }
  @Input() selectedTopic: any;
  questionToQualify: any = {
  	"question1" : false,
  	"question2" : false,
  	"question3" : false,
  }
  qualifyForProgram: string = "unknown";
  scolarshipSelected: string = "";
  listOfScolarships: string[] = [
    "Single parent scholarship",
    "Newcomer scholarship",
    "Low income scholarship",
    "Disability scholarship",
    "First in family scholarship",
    "International student/study abroad scholarship",
    "Part time job scholarship",
    "Returning students scholarship",
    "Mom’s scholarship",
    "Senior Scholarship",
    "Refugees Scholarship",
    "Unemployed Scholarship",
    "Full-time employee scholarship",
    "Ontario Academic excellence scholarship"
  ];
  diplomaContent: Diploma[];
  certificateContent: Certificate[];
  showCertificates: boolean = false;

  ngOnInit() {
    this.diplomaContent = this._diplomaService.getDiplomas();
    this.certificateContent = this._certificateService.getCertificates();
  }

  switchQualifyForProgramQuestion(questionKey) {
  	switch (questionKey) {
  		case 1: 
  			this.questionToQualify.question1 =! this.questionToQualify.question1;
  			break;
			case 2: 
				this.questionToQualify.question2 =! this.questionToQualify.question2;
				break;
			case 3: 
				this.questionToQualify.question3 =! this.questionToQualify.question3;
				break;
  	}
  }

  checkIfQualify() {
  	if (this.questionToQualify.question1 && this.questionToQualify.question2 && this.questionToQualify.question3) {
  		this.qualifyForProgram = "yes";
  	} else {
  		this.qualifyForProgram = "no";
  	}
  }

  navigateToDiploma(diploma) {
    if (diploma !== "") {
      this._router.navigate(['/diplomas/', diploma]);
      $("html, body").animate({ scrollTop: 0 }, 600);
    }
  }

  navigateToCertificate(certificate) {
    if (certificate !== "") {
      this._router.navigate(['/certificates/', certificate]);
      $("html, body").animate({ scrollTop: 0 }, 600);
    }
  }

  toggleCertificates(scolarshipSelected) {
    if (scolarshipSelected != "") {
      this.showCertificates = true;
    }
  }

}
