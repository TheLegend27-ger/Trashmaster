import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { TipData } from 'src/app/models/tip.model';
import { componentService } from '../../componentService.service';



@Component({
  selector: 'app-data-uploader-tips-editor',
  templateUrl: './data-uploader-tips-editor.component.html',
  styleUrls: ['./data-uploader-tips-editor.component.scss']
})

export class DataUploaderTipsEditorComponent implements OnInit {
  enteredTitle = "";
  enteredText = "";

  isLoading = false;
  form!: FormGroup;
  imagePreview!: string;
  private mode = "create";
  private tipId: any;
  tip: TipData={
    id: '',
    Title: '',
    Text: '',
    TipType: '',
    ImageBase64: ''
  }

  constructor(
    public componentService: componentService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      Title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      Text: new FormControl(null, { validators: [Validators.required] }),
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("tipId")) {
        this.mode = "edit";
        this.tipId = paramMap.get("tipId");
        this.isLoading = true;
        this.componentService.getSingleTip(this.tipId).subscribe(TipData => {
          this.isLoading = false;
          this.tip = {
            id: TipData._id,
            Title: TipData.Title,
            Text: TipData.Text,
            TipType: TipData.TipType,
            ImageBase64: TipData.ImageBase64
          };
          this.form.setValue({
            Title: this.tip.Title,
            Text: this.tip.Text,
          });
        });
      } else {
        this.mode = "create";
        this.tipId = null;
      }
    });
  }
  onImagePicked(input:any) {
    console.log(input.files)
    let myfile: File = input.files[0]
    console.log(myfile)
    this.convertToBase64(myfile);
  }
  onSaveTip() {
    if (this.form.invalid) {
      console.log("invalid")
      console.log(document.getElementsByClassName('ng-invalid'))
      return;
    }
    if (this.form.valid) {
      console.log("valid")
    }
    //this.isLoading = true;
    if (this.mode === "create") {
      let tipToSave: TipData = {
        id: '',
        Title: this.form.value.Title,
        Text: this.form.value.Text,
        TipType: this.form.value.TipType,
        ImageBase64: this.tip.ImageBase64
      }
      console.log("tipütosave   " + tipToSave)
      this.componentService.addTip(tipToSave);
    } else {
      let tipToSave: TipData = {
        id: this.tipId,
        Title: this.form.value.Title,
        Text: this.form.value.Text,
        TipType: this.form.value.TipType,
        ImageBase64: this.tip.ImageBase64
      }
      this.componentService.updateTip(tipToSave.id, tipToSave);
      console.log(tipToSave)
    }
    this.form.reset();
  }



  convertToBase64(file: File){
    console.log("convertToBase64")
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: any) {
    console.log("_handleReaderLoaded")
    let reader = e.target;
    let base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    this.tip.ImageBase64 =  base64result.toString()
  }
}
