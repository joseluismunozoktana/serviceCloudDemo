import { LightningElement } from 'lwc';
import camera from '@salesforce/resourceUrl/adt';
import title from '@salesforce/label/c.adt_upgradecamera_title';
import reqtitle from '@salesforce/label/c.adt_upgradecamera_request_title';
import reqdesc from '@salesforce/label/c.adt_upgradecamera_request_desc';

export default class CameraStorage extends LightningElement {

    cameraadt = camera + '/cameraadt.png';
    value = '2years';

    get options() {
        return [
            { label: '6 months', value: '6months' },
            { label: '1 year', value: '1year' },
            { label: '2 years', value: '2years' },
            { label: 'Indefinite', value: 'indefinite' },
        ];
    }

    label = {
        title,
        reqtitle,
        reqdesc
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}