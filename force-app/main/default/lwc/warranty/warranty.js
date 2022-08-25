import { LightningElement } from 'lwc';
import flooddevice from '@salesforce/resourceUrl/flooddevice';
import flooddetector from '@salesforce/resourceUrl/flooddetector';
import flooddevicemobile from '@salesforce/resourceUrl/mobileadt';


export default class Warranty extends LightningElement {
    deviceimage = flooddevice + '/flooddeviceADT.png';
    deviceimagemobile = flooddevicemobile + '/adtdevicemobile.jpg';
    justdevice = flooddetector + '/flood-detector.png';

    value = '2years';
    secondvalue = 'full';

    get options() {
        return [
            { label: '1 year', value: '1year' },
            { label: '2 years', value: '2years' },
            { label: '3 years', value: '3years' },
        ];
    }

    get options2() {
        return [
            { label: 'Full', value: 'full' },
            { label: 'Partial', value: 'partial' }
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    handleChange2(event) {
        this.secondvalue = event.detail.value;
    }
}