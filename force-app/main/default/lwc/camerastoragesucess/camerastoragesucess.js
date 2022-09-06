import { LightningElement } from 'lwc';
import adtservice from '@salesforce/resourceUrl/adt';

export default class Camerastoragesucess extends LightningElement {
    check = adtservice + '/greencheck.png';
    close = adtservice + '/close.png';
    cameraadt = adtservice + '/cameraadt.png';
}