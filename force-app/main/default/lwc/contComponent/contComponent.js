import { LightningElement,api } from 'lwc';

export default class ContComponent extends LightningElement {

    @api headerTitle;
    @api iconName;

    greeting = 'Type something';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}