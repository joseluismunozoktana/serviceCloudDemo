import { LightningElement } from 'lwc';
import adtservice from '@salesforce/resourceUrl/adt';
import title from '@salesforce/label/c.adt_upgradecamera_title';
import successtext from '@salesforce/label/c.adt_upgradecamera_success_text';
import successnotif from '@salesforce/label/c.adt_upgradecamera_success_notif';

export default class Camerastoragesucess extends LightningElement {
    check = adtservice + '/greencheck.png';
    close = adtservice + '/close.png';
    cameraadt = adtservice + '/cameraadt.png';

    handleClose() {
        this.template.querySelector('.notification').style.display = "none";
    }

    label = {
        title,
        successtext,
        successnotif
    }
}