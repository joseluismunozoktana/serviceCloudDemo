import { LightningElement } from 'lwc';
import adtservice from '@salesforce/resourceUrl/adt';

export default class Success extends LightningElement {
    justdevice = adtservice + '/flood-detector.png';
    check = adtservice + '/greencheck.png';
}