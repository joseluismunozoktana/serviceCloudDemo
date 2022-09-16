import { LightningElement } from 'lwc';
import adtservice from '@salesforce/resourceUrl/adt';
import title from '@salesforce/label/c.adt_extendwarranty_title';
import successtext from '@salesforce/label/c.adt_extendwarranty_success_text';
import successnotif from '@salesforce/label/c.adt_extendwarranty_success_notif';
export default class Success extends LightningElement {
    justdevice = adtservice + '/flood-detector.png';
    close = adtservice + '/close.png';
    check = adtservice + '/greencheck.png';

    handleClose() {
        this.template.querySelector('.notification').style.display = "none";
    }

    label={
        title,
        successtext,
        successnotif
    }
}