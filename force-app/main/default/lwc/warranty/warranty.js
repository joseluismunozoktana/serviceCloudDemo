import { LightningElement } from 'lwc';
import flooddetector from '@salesforce/resourceUrl/adt';
import title from '@salesforce/label/c.adt_extendwarranty_title';
import reqtitle from '@salesforce/label/c.adt_extendwarranty_request_title';
import reqdesc from '@salesforce/label/c.adt_extendwarranty_request_desc';
export default class Warranty extends LightningElement {

    justdevice = flooddetector + '/flood-detector.png';

    value = '2years';
    secondvalue = 'full';

    label = {
        title,
        reqtitle,
        reqdesc
    }

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