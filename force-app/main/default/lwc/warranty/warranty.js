import { LightningElement } from 'lwc';
import flooddetector from '@salesforce/resourceUrl/adt';
export default class Warranty extends LightningElement {

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