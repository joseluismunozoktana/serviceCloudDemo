import { LightningElement } from 'lwc';
import adtservice from '@salesforce/resourceUrl/adt';

export default class Success extends LightningElement {
    justdevice = adtservice + '/flood-detector.png';
    close = adtservice + '/close.png';
    check = adtservice + '/greencheck.png';

    handleClose(){
        console.log("here");
        const elements = document.getElementsByClassName("notification");
        console.log("elements.length: " + elements.length);
        for (var i=0; i<elements.length; i++) {
            elements[i].style.display = "none";
        }
        console.log("hi");
    }
}