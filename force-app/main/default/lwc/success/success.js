import { LightningElement } from 'lwc';
import adtservice from '@salesforce/resourceUrl/adt';

export default class Success extends LightningElement {
    justdevice = adtservice + '/flood-detector.png';
    close = adtservice + '/close.png';
    check = adtservice + '/greencheck.png';

    handleClose() {
        this.template.querySelector('.notification').style.display = "none";
    }
}