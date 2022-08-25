import { LightningElement } from 'lwc';
import flooddetector from '@salesforce/resourceUrl/flooddetector';
import greencheck from '@salesforce/resourceUrl/greencheck';


export default class Success extends LightningElement {
    justdevice = flooddetector + '/flood-detector.png';
    check = greencheck + '/greencheck.png';
}